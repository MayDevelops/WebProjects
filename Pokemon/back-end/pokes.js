const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const multer = require('multer')
const upload = multer({
    limits: {
        fileSize: 50000000
    }
});

const trainers = require("./trainers.js");
const Trainer = trainers.model;
const validUser = trainers.valid;

const pokeSchema = new mongoose.Schema({
    trainer: {
        type: mongoose.Schema.ObjectId,
        ref: 'Trainer'
    },
    id: Number,
    name: String,
    sprite: {
        normal: String,
        HD: String
    },
    types: [],
});


const Poke = mongoose.model('Poke', pokeSchema);


// upload pokemon
router.post("/", validUser, upload.single('poke'), async (req, res) => {
    // check parameters
    if (!req.body)
        return res.status(400).send({
            message: "Body is empty."
        });

    const poke = new Poke({
        trainer: req.trainer,
        id: req.body.id,
        name: req.body.name,
        sprite: {
            normal: req.body.sprite.normal,
            HD: req.body.sprite.HD,
        },
        types: req.body.types,
    });
    try {
        await poke.save();
        return res.sendStatus(200);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get my pokemon
router.get("/", validUser, async (req, res) => {
    try {
        let photos = await Poke.find({
            user: req.user
        }).sort({
            created: -1
        }).populate('trainer');
        return res.send(photos);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

// get all pokemon
router.get("/all", async (req, res) => {
    try {
        let photos = await Poke.find().sort({
            created: -1
        }).populate('trainer');

        return res.send(photos);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

router.get("/:id", async (req, res) => {
    try {
        let photo = await Poke.findById(req.params.id).sort({
            created: -1
        }).populate('trainer');
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
