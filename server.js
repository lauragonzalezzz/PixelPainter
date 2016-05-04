'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.set('view engine', 'jade');
app.set('views', './views');
// app.get('/', (req, res) => {
// });



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');

});

mongoose.connect('mongodb://localhost/pixel_painter');
const pixelPainterSchema = new Schema({
  name : String,
  pixelStates : [],
  createdAt : Date,
  updatedAt : Date
});

const Masterpiece = mongoose.model('Masterpiece', pixelPainterSchema);
app.get('/:name', (req, res) => {
  Masterpiece.find({ name : req.params.name}, (err, masterpiece) => {
  let pixelInfo = masterpiece[0].pixelStates[0];
  pixelInfo = pixelInfo.split("$,");
  pixelInfo[pixelInfo.length-1] = pixelInfo[pixelInfo.length-1].slice(0, -1);
    if(err){
      return console.error(err);
    }
    res.render('saved', { pixelStates : pixelInfo });
  });
});

app.post('/save', (req, res) => {
  const image = new Masterpiece({
    name : req.body.name,
    pixelStates : req.body.pixelStates
  })
  image.save((err, image) => {
    if (err) {
      return console.error(err);
    };
  });
  console.log("File Saved");
});



app.listen(3000, () => {
  console.log("Listening on port 3000");
});