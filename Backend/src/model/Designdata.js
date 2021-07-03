const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dressown");

const Schema = mongoose.Schema;

const DesignSchema = new Schema({
    title : String,
    category : String,
    color : String,
    image : String,
    description : String,
    price : Number,
    offer : String,
    size : String
});

var Designdata = mongoose.model("designdata",DesignSchema);
module.exports = Designdata;