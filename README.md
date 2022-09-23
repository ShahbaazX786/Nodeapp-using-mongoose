# Nodeapp-using-mongoose
Nodejs app (written in Javascript(es6) via Express) will connect with mongodb and we will execute mongodb commands(written mongoose ODM)  via express  all in app.js file.


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

-Also now ```mongoose.connect('mongodb://localhost:27017/myapp');``` is not working instead use ```mongoose.connect('mongodb://0.0.0.0:27017/myapp');```