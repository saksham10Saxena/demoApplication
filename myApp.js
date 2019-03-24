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

    // module.exports = conl;

    
    


    con.connect(function(err) {
      if (err) throw err;
      con.query('SELECT * FROM groups', function(err, result, fields) {
        if(err) throw err;
        //  console.log(result);
      });
    });

    app.get('/loginPage', function(req, res) {
      con.query('SELECT * FROM loginPage', function(err, rows, fields) {
        con.end();
        if (err) throw err;
        console.log(rows);
        // console.log(fields);
        res.json(rows);
      })
    })
    
    app.get('/taskName', function(req, res) {
      con.query('SELECT * FROM taskName', function(err, rows, fields) {
        con.end();
        if (err) throw err;
        console.log(rows);
        // console.log(fields);
        res.json(rows);
      })
    })

    app.get('/groupss', function(req, res) {
      con.query('SELECT * FROM groups', function(err, rows, fields) {
        con.end();
        if (err) throw err;
        console.log(rows);
        // console.log(fields);
        res.json(rows);
      })
    })

    // app.get('/', function(req, res) {
    //   con.query('SELECT * FROM loginPage', function(err, rows, fields) {
    //     con.end();
    //     if (err) throw err;
    //     console.log(rows);
    //     // console.log(fields);
    //     res.json(rows);
    //   })
    // })


    //  app.post('/insertingDataUsingAngularjs', function(req, res, next) {
        
    //      var value = req.body; 
    //      console.log('request received:', req.body);
    //      var name = req.body.name;
    //      var address = req.body.address;
    //       var sql = "INSERT INTO customers  (name, address)  values ('"+name+"',  '"+address+"')";   
    //      con.query(sql, function(err, dbres){
    //        if (err) throw err;
    //        res.json({"success":"true"});
    //      });
    //  })

    app.post('/login', function(req, res, next) {
      var value = req.body;
      console.log('request received:', req.body);
      var email = req.body.email;
      var password = req.body.password;
      var sql3 = "SELECT * FROM user WHERE email='"+email+"' AND password='"+password+"'";
      // var sql3 = "INSERT INTO loginPage (username, password) values ('"+username+"', '"+password+"')";
      con.query(sql3, function(err, rows, fields, resp) {
        if (err) throw err;
        console.log(rows);
        res.json({"success": "true"});
        // res.json(rows);
      });
    })

    app.post('/signUp', function(req, res, next) {
      var value = req.body;
      console.log('request received:', req.body);
      var firstName = req.body.fname;
      var lastName = req.body.lname;
      var gender = req.body.gender;
      var email = req.body.email;
      var password = req.body.password;
      var sql5 = "INSERT INTO user (first_name, last_name, gender, email, password)  values ('"+firstName+"',  '"+lastName+"', '"+gender+"', '"+email+"', '"+password+"')";
      // var sql3 = "INSERT INTO loginPage (username, password) values ('"+username+"', '"+password+"')";
      con.query(sql5, function(err, rows, fields, resp) {
        if (err) throw err;
        console.log(rows);
        res.json({"success": "true"});
        // res.json(rows);
      });
    })

    //  app.get('/login', function(req, res) {
    //    sql4 = "SELECT * FROM loginPage WHERE username='"+username+"' AND password='"+password+"'";
    //    con.query(sql4, function(err, resp) {
    //      if (err) throw err;
    //      res.json({"success": "true"});
    //      res.json(rows);
    //    });
    //  })



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

app.listen(5000, function() {
    console.log('Server started on port 5000');
});