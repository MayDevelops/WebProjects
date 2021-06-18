const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const pokedexSchema = new mongoose.Schema({
    trainer: String,
    pokedex: Array,
    name: String
})

const Pokedex = mongoose.model('Pokedex', pokedexSchema);

router.get('/:id', async (req, res) => {
    try {
        let pokedex = await Pokedex.find({
            trainer: req.params.id
        }).sort({
            created: -1
        });
        return res.send(pokedex);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const query = {trainer: req.body.user._id};
        const updateDocument = {
            $set: {'pokedex': req.body.pokedex}
        }
        const result = await Pokedex.updateOne(query, updateDocument);
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }

});

router.post('/register/:id', async (req, res) => {
    const pokedex = new Pokedex({
        trainer: req.body.user,
        name: (req.body.name ? req.body.name : 'My First Pokedex'),
        pokedex: []
    });
    try {
        await pokedex.save();
        return res.send(pokedex);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    model: Pokedex,
    routes: router
}
