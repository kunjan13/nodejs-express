var express = require('express');

var app = express();

//telling express that we want to use ejs as view engine. By default ejs will look for views in /views folder this is default behaviour
app.set('view engine', 'ejs');

//use middle ware inbuild in express
//inbuilt function in express.static('assets')
//below line links the route /assets to static folder 'assets' here name of the folder can be anything so it can point/link to any folder you want.
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    //res.sendFile(__dirname + '/index.html');

    res.render('index');
});

//when you want to put some dynamic content from parameters to html, that is when template engines come into picture, in node we use Javascript tempalte engine
//there are many engines available in javascript but we will use 'EJS' (embeddedjs)
app.get('/contact', function(req, res){
    //res.sendFile(__dirname + '/contact.html');

    res.render('contact');
});

//with query strings/route parameters
app.get('/profile/:id', function(req, res){
    //res.send('this is profile for id: ' + req.params.id)

    var personData = {age: 29, job: 'ninja', hobbies : ['eating', 'traveling', 'reading']};
    res.render('profile', {person: req.params.id, data: personData});
});

app.listen(3000);