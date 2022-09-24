// jshint esversion:6
const mongoose = require('mongoose');

// const URL = "mongodb://localhost:27017/fruitsDB"; // this sheet not working now after version 5+

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB",{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{//freaking sheet mongodb://0.0.0.0:27017/myapp somehow this sheet is working and mongodb://localhost:27017/ this sheet is not working in mongodb 6+.
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to mongodb");
    }
}); 

const fruitSchema = new mongoose.Schema({ // schema is nothing but blueprint.
    name:String,
    rating:Number,
    review:String
});

const Fruit = mongoose.model("fruit",fruitSchema); //model (wireframe) of the schema(blueprint)

const fruit =  new Fruit({
    name:"Apple",
    rating:10,
    review:"Damn boii dis fruit is bussin"
});

// fruit.save(); //saves the object as a document in the database.

// just created this  below schema, model and document as a practice
// const personSchema = mongoose.Schema({
//     name:String,
//     age:Number
// });

// const Person = mongoose.model("Person",personSchema);

// const person = new Person({
//     name:"Jack",
//     age:21
// });
// person.save();


// 3 fruit objects created
const kiwi = new Fruit({
    name:"Kiwi",
    rating:10,
    review:"Damn boii this fruit is bussing aswell"
});

const orange = new Fruit({
    name:"Orange",
    rating:9,
    review:"Boii this fruit is soar as hell"
});

const banana = new Fruit({
    name:"Banana",
    rating:10,
    review:"Great fruit for potassium,make a dizzy person eat one of these and he will be up in no time."
});

// inserting all fruit objects as documents into the database using mongoose.model. check docs for more mongoose.model methods
Fruit.insertMany([kiwi,orange,banana],function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("All Bussin fruits added to the database my boii");
    }
});

// funtion to find/fetch all documents in the fruits Collection using the Fruit model
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
            //    console.log(fruits); //fetches all documents in json format.
        });

         // just a simple db connection close method which is given a callback for console logging. you can also use mongoose.disconnect()/mongoose.connection.close(); both works fine.
        mongoose.disconnect(function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log('connection to mongodb closed');
            }
        });

    }
});
