// jshint esversion:6
const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/fruitsDB";

mongoose.connect(URL,{useNewUrlParser:true});

const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});