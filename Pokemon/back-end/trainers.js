const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");

const router = express.Router();

const trainerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    password: String,
    pokedexes: Array
});

trainerSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        return next();

    try {
        const hash = await argon2.hash(this.password);
        this.password = hash;
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
});

trainerSchema.methods.comparePassword = async function (password) {
    try {
        const isMatch = await argon2.verify(this.password, password);
        return isMatch;
    } catch (error) {
        return false;
    }
};

trainerSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

const Trainer = mongoose.model('Trainer', trainerSchema);

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
        req.user = trainer;
    } catch (error) {
        return res.status(403).send({
            message: "not logged in"
        });
    }
    next();
};

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

// get logged in trainer
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