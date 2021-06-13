const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const commentSchema = new mongoose.Schema({
    user: String,
    pokedex: []
})

const Comment = mongoose.model('Comment', commentSchema);


router.get('/:id', async (req, res) => {
    try {
        let comments = await Comment.find({
            user: req.params.id
        }).sort({
            created: -1
        });
        return res.send(comments);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});


router.put('/:id', async (req, res) => {
    try {
        const query = {user: req.body.user._id};
        const updateDocument = {
            $set: {'pokedex': req.body.pokedex}
        }
        const result = await Comment.updateOne(query, updateDocument);
        return res.send(result);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }

});

router.post('/register/:id', async (req, res) => {
    //creating a pokedex attached to the usersID, that big object number in the mongo db
    const comment = new Comment({
        user: req.body.user,
    });
    try {
        await comment.save();
        return res.send(comment);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});

module.exports = {
    model: Comment,
    routes: router
}
