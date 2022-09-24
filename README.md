## Nodeapp-using-mongoose

> Nodejs app (written in Javascript(es6) via Express) will connect with mongodb and we will execute mongodb commands(written mongoose ODM)  via express  all in app.js file.

---

#### Steps to install MongoDB v6+:
- Boii this thing is getting way complicated than ever..
- around ```version 4``` all the things used to come packed with the ```mongodb.msi``` but now, not like that.
- we need to install ```mongod```(server)[will get installed automatically] and ```mongosh```(mongo Shell)[Need to download from build and tools section] separately
- Then after installing them both install ```mongodb compass``` if you are GUI learner but if mongosh(CLI) is enough for you then skip it(just install it only takes aroung 1.6GB).
- Then goto C drive then create a folder ```data``` then under it create another folder ```db```. I'm using smallcase for a reason here.
- Then Add both of these install locations in ```environment variables``` under ```system variables``` so that they will be available to all the users in the system, then goto ```path``` and paste the locations of both softwares
```
Ex:
    C:\Program Files\MongoDB\Server\6.0\bin
    C:\Program Files\mongosh
```

- Then check them in the cmd by running mongod --version and mongosh and if they give anything other than ```-``` and ```>``` at bottom of the cmd then you messed up something.

- Also now ```mongoose.connect('mongodb://localhost:27017/myapp');``` is not working instead use ```mongoose.connect('mongodb://0.0.0.0:27017/myapp');```

---

#### Mondodb CRUD functions using Mongoose (ODM)


###### Insert function (Create)
```
Fruit.insertMany([kiwi,orange,banana],function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("All Bussin fruits added to the database my boii");
    }
}); 
```

###### Find function (Read)
```
Fruit.find(function(err,fruits){
    if(err){
        console.log(err);
    }
    else{
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        });

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
```

###### Update function (Update)
```
Person.updateOne({name:'Jack'},{age:52},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("document sucessfully updated!");
    }
}); 
```

###### Delete function (Delete)
```
Person.deleteOne({name:'Jack'},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("document sucessfully deleted!");
    }
});
```

---
###### Relationship b/w collections (Embedding documents)

- FruitSchema used to create a blueprint of the fruits collection.
```
const fruitSchema = new mongoose.Schema({
    name:String,
    rating:Number,
    review:String
});
```

- Model is used to map the document into the fruits collection and also to run the CRUD methods on the collection.

```
const Fruit = mongoose.model("fruit",fruitSchema);
```

```
const personSchema = mongoose.Schema({
    name:String,
    age:Number,
    favoritefruit:fruitSchema //[embedding done here in the schema]
});
```
```
const Person = mongoose.model("Person",personSchema); 
```
- Creating a mango document and saving it to the fruits database
```
const mango = new Fruit({
    name:"mango",
    rating:10,
    review:"King of fruit"
});
mango.save();
```
- Creating a person document and saving it to the people database
```
const person = new Person({
    name:"Amy",
    age:12,
    favoritefruit:mango //[embedding done here]
});
person.save();
```

---
>PS: Checkout the app.js it has comments for detailed understanding.