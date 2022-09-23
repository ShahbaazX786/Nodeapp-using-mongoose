// jshint esversion:6
const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(URL,{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});

const Fruit = mongoose.model("Fruit",fruitSchema);

const fruit =  new Fruit({
    name:"Apple",
    rating:10,
    review:"Damn boii dis fruit is bussin"
});