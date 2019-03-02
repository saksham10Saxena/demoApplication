var express = require('express');
const mysql = require('mysql2');
var mime    =   require('mime');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


app.use(bodyParser.json());
app.use(express.static('public'));

// create connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'saksham@1234',
    database: 'mydb2'
  });


con.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");  
    } else {
        console.log("Error connecting database ... \n\n");  
    }
    });

    

    app.post('/insertingDataUsingAngularjs', function(req, res, next) {
        
        var value = req.body; 
        console.log('request received:', req.body);
        var name = req.body.name;
        var address = req.body.address;
         var sql = "INSERT INTO customers  (name, address)  values ('"+name+"',  '"+address+"')";   
        con.query(sql, function(err, dbres){
          if (err) throw err;
          res.json({"success":"true"});
        });
    })

    app.get('/mysql', (req, res) => {
         con.query(
        //  'SELECT * FROM `customers` WHERE `name` = "Ramesh"',    
         'SELECT * FROM `customers`',
          function(err, rows, fields) {
              con.end();
              if (err) throw err;
            //   console.log('The solution is: ', rows);
              console.log(rows);
            // console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            console.log(rows[0].name);
            // res.send('Hello, ' + rows[1].name);
            res.json(rows);
     
      });
    });



// View Engine
 app.set('View Engine', 'ejs');
 app.set('views', path.join(__dirname, 'views'));

// body Parser Middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended: false}));

 app.use(express.static(path.join(__dirname, '/public'))); // Set Static Path


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