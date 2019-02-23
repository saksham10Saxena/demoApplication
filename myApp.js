var express = require('express');
const mysql = require('mysql2');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

// create connection
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'saksham@1234',
    database: 'mydb2'
  });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
    // con.query("CREATE DATABASE mydb2", function (err, result) {
    //   if (err) throw err;
    //   console.log("Database created");
    // });
    // var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
        // con.query(sql, (err, result) => {
    //     if (err) throw err;
    //     console.log("Table Created");
    // });
    
    // var inserting = "INSERT INTO customers (name, address) VALUES ?";
    // var values = [
    //     ['Ramesh', 'NH-24'],
    //     ['Adil', 'Kashmir Valley'],
    //     ['Ahmed Dar', 'Pulwama'],
    //     ['Mazood Azhar', 'Peshawar'],
    //     ['Jaesh e Mohammed', 'Haafiz Saed']
    // ]


    // con.query(inserting, [values], function (err, result) {
    //     if (err) throw err;
    //      console.log("Number of records inserted: " + result.affectedRows);
    // });


//   });

//   app.get('/mysql', (req, res) => {
//     con.connect((error) => {
//         if (err) throw err;
//         console.log("Connected!");

//         con.query("SELECT * FROM customers", function(err, result, fields) {
//             if (err) throw err;
//             console.log(fields);
//             console.log(result);
//             res.send(result);
//         });
//     });
// });
// app.get('/mysql', (req, res) => {
//     con.getConnection((error, tempCont) => {
//         if (err) { 
//             tempCont.release();
//             console.log('error');
//         }    
//         console.log(connected)
//         tempCont.query(
//             'SELECT * FROM `customers`',
//             function(err, results, fields, rows) {
//               console.log(results); // results contains rows returned by server
//               console.log(fields); // fields contains extra meta data about results, if available
//               res.json(rows);
//             }
//           );
//     })
// })
// con.query(
//     'SELECT * FROM `customers` WHERE `name` = "Ramesh"',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );

con.connect(function(err){
    if(!err) {
        console.log("Database is connected ... \n\n");  
    } else {
        console.log("Error connecting database ... \n\n");  
    }
    });

    app.get('/mysql', (req, res) => {
         con.query(
         'SELECT * FROM `customers` WHERE `name` = "Ramesh"',
          function(err, rows, fields) {
              con.end();
              if (err) throw err;
              console.log('The solution is: ', rows);
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
     
      });
    });




  

//   connection.query(
//     'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
//     }
//   );

//   connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function(err, results) {
//       console.log(results);
//     }
//   );


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