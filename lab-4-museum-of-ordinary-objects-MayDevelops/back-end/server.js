const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});


// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '/var/www/lab4.maydevelops.com/images/',
  limits: {
    fileSize: 10000000
  }
});

// Create a scheme for the items: title, path, text
const itemSchema = new mongoose.Schema({
  title: String,
  path: String,
  text: String,
});

// Create a model for the items
const Item = mongoose.model('Item', itemSchema);

// Upload a photo
app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

// Create a new item
app.post('/api/items', async (req, res) => {
  const item = new Item({
    title: req.body.title,
    path: req.body.path,
    text: req.body.text,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    res.sendStatus(500);
  }
});

// Get a list of all the items
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    res.send(items);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
});

// Delete an item
app.delete('/api/items/:id', async (req, res) => {
  try {
    await Item.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
});

// Edit an item
app.put('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findOne({
      _id: req.params.id
    });
    item.title = req.body.title;
    item.text = req.body.text;
    await item.save();
    res.sendStatus(200);
  } catch (error) {
    // console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));