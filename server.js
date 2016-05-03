'use strict';

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const Schema = mongoose.Schema;

app.use(express.static('public'));

app.get('/',)

app.post('/save', (req, res) => {

});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected!');
  const pixelPainterSchema = new Schema({
    username : {type : String, required : true, unique : true },
    url : {type : String, required : true}
    title : {type : String, required : true},
    pixelStates : [],
    createdAt : Date,
    updatedAt : Date
  });

  const Masterpiece = mongoose.model('Masterpiece', pixelPainterSchema);

});

mongoose.connect('mongodb://localhost/pixel_painter');