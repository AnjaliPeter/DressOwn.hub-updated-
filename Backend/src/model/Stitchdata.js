const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dressown");

const Schema = mongoose.Schema;

const StitchSchema = new Schema({
    category : String,
    image : String,
    description : String,
    price : String,
    size : String,
    bust : Number,
    waist : Number,
    hip : Number,
    neck : Number,
    shoulder : Number,
    bustspread : Number,
    backwidth : Number,
    frontlength : Number,
    backlength : Number
});

var Stitchdata = mongoose.model("stitchdata",StitchSchema);
module.exports = Stitchdata;