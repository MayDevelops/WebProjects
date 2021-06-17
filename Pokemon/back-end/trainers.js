const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");

const router = express.Router();

//
// Trainer schema and model
//

// This is the schema. Users have usernames and passwords. We solemnly promise to
// salt and hash the password!
const trainerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    pokedexes: Array
});

// This is a hook that will be called before a user record is saved,
// allowing us to be sure to salt and hash the password first.
trainerSchema.pre('save', async function (next) {
    // only hash the password if it has been modified (or is new)
    if (!this.isModified('password'))
        return next();

    try {
        // generate a hash. argon2 does the salting and hashing for us
        const hash = await argon2.hash(this.password);
        // override the plaintext password with the hashed one
        this.password = hash;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// This is a method that we can call on Trainer objects to compare the hash of the
// password the browser sends with the has of the user's true password stored in
// the database.
trainerSchema.methods.comparePassword = async function (password) {
    try {
        // note that we supply the hash stored in the database (first argument) and
        // the plaintext password. argon2 will do the hashing and salting and
        // comparison for us.
        const isMatch = await argon2.verify(this.password, password);
        return isMatch;
    } catch (error) {
        return false;
    }
};

// This is a method that will be called automatically any time we convert a user
// object to JSON. It deletes the password hash from the object. This ensures
// that we never send password hashes over our API, to avoid giving away
// anything to an attacker.
trainerSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

// create a Trainer model from the Trainer schema
const Trainer = mongoose.model('Trainer', trainerSchema);

/* Middleware */

// middleware function to check for logged-in users
const validTrainer = async (req, res, next) => {
    if (!req.session.userID)
        return res.status(403).send({
            message: "not logged in"
        });
    try {
        const trainer = await Trainer.findOne({
            _id: req.session.userID
        });
        if (!trainer) {
            return res.status(403).send({
                message: "not logged in"
            });
        }
        // set the trainer field in the request
        req.user = trainer;
    } catch (error) {
        // Return an error if user does not exist.
        return res.status(403).send({
            message: "not logged in"
        });
    }

    // if everything succeeds, move to the next middleware
    next();
};

/* API Endpoints */

/* All of these endpoints start with "/" here, but will be configured by the
   module that imports this one to use a complete path, such as "/api/user" */

// create a new user
router.post('/', async (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.username || !req.body.password)
        return res.status(400).send({
            message: "first name, last name, username and password are required"
        });

    try {
        const existingTrainer = await Trainer.findOne({
            username: req.body.username
        });
        if (existingTrainer)
            return res.status(403).send({
                message: "username already exists"
            });

        // create a new trainer and save it to the database
        const trainer = new Trainer({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            password: req.body.password,
            pokedexes: [{
                name: "My First Pokedex",
                pokedex: []
            }]
        });
        await trainer.save();
        req.session.userID = trainer._id;

        return res.send({
            trainer: trainer
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// login a trainer
router.post('/login', async (req, res) => {
    if (!req.body.username || !req.body.password)
        return res.sendStatus(400);

    try {
        const trainer = await Trainer.findOne({
            username: req.body.username
        });
        if (!trainer)
            return res.status(403).send({
                message: "username or password is wrong"
            });

        if (!await trainer.comparePassword(req.body.password))
            return res.status(403).send({
                message: "username or password is wrong"
            });

        req.session.userID = trainer._id;

        return res.send({
            trainer: trainer
        });

    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get logged in user
router.get('/', validTrainer, async (req, res) => {
    try {
        res.send({
            user: req.user
        });
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// logout
router.delete("/", validTrainer, async (req, res) => {
    try {
        req.session = null;
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// update a trainers pokedex
router.put('/pokedex',validTrainer, async (req, res) => {
    console.log("Updating trainer pokedex...");
    try {
        const query = {_id: req.body.user._id};
        const updateDocument = {
            $set: {'pokedexes': req.body.pokedexes}
        }
        const result = await Trainer.updateOne(query, updateDocument);
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    routes: router,
    model: Trainer,
    valid: validTrainer
};