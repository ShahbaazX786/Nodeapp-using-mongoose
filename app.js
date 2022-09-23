// jshint esversion:6
const mongoose = require('mongoose');

// const URL = "mongodb://localhost:27017/fruitsDB";

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{//freaking sheet mongodb://0.0.0.0:27017/myapp somehow this sheet is working and mongodb://localhost:27017/ this sheet is not working in mongodb 6+.
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to mongodb");
    }
}); 

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

fruit.save();

const personSchema = mongoose.Schema({
    name:String,
    age:Number
});

const Person = mongoose.model("Person",personSchema);

const person = new Person({
    name:"Jack",
    age:21
});
person.save();