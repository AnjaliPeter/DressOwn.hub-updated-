const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/dressown");

const Schema = mongoose.Schema;

const PrototypeSchema = new Schema({
    category : String,
    color : String,
    image : String
});

var Prototypedata = mongoose.model("prototypedata",PrototypeSchema);
module.exports = Prototypedata;