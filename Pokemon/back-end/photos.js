const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
    dest: '../front-end/public/images/',
    limits: {
        fileSize: 50000000
    }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

const pokeSchema = new mongoose.Schema({
    abilities: [],
    id: Number,
    moves: [],
    name: String,
    sprites: [],
    stats: [],
    types: [],

});



const Poke = mongoose.model('Poke', pokeSchema);


// upload photo
router.post("/", async (req, res) => {
    // check parameters
    console.log(req);
    if (!req.file)
        return res.status(400).send({
            message: "Must upload a file."
        });

    const poke = new Poke({
        abilities: req.abilities,
        id: req.id,
        moves: req.moves,
        name: req.name,
        sprites: req.sprites,
        stats: req.stats,
        types: req.types,
    });
    try {
        console.log(poke);
        await poke.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get my photos
router.get("/", validUser, async (req, res) => {
    // return photos
    try {
        let photos = await Poke.find({
            user: req.user
        }).sort({
            created: -1
        }).populate('user');
        return res.send(photos);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get all photos
router.get("/all", async (req, res) => {
    try {
        let photos = await Poke.find().sort({
            created: -1
        }).populate('user');

        return res.send(photos);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.get("/:id", async (req,res) => {
    try {
        let photo = await Poke.findById(req.params.id).sort({
            created: -1
        }).populate('user');
        return res.send(photo);
    } catch (error) {
        console.log(error)
        return res.sendStatus(500);
    }
});




module.exports = {
    model: Poke,
    routes: router,
}
