var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// MiddleWare
// var logger = function(req, res, next){
//     console.log('Logging...');
//     next();
// }

// app.use(logger); 

// View Engine
 app.set('View Engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

// body Parser Middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

 app.use(express.static(path.join(__dirname, 'public'))); // Set Static Path


// app.get('/', (req, res) => {
//     res.send('Hello');
// });

app.post('/post', (req, res) => {
    console.log('Get a POST request');
    res.send('Hello Post');
})

app.get('/', (req, res) => {
    res.render('index.ejs');
});

// app.get('/', (req, res) =>{
//     res.render('index.ejs', {
//         title: 'Services'
//     });
// })

app.listen(3000, function() {
    console.log('Server started on port 3000');
});