const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

const commentSchema = new mongoose.Schema({
    user: String,
    photo: {
        type: mongoose.Schema.ObjectId,
        ref: 'Photo'
    },
    comment: String,
    created: {
        type: Date,
        default: Date.now
    }
})

const Comment = mongoose.model('Comment', commentSchema);



router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        let comments = await Comment.find({
            photo: req.params.id
        }).sort({
            created: -1
        });
        return res.send(comments);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
});


router.post('/', async (req, res) => {
    const comment = new Comment({
        user: req.body.user,
        photo: req.body.photo,
        comment: req.body.comment
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
