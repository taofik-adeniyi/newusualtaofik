const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port: number = 3010;

const url = "mongodb://localhost:27017";
const mydb = "newusual";

const client = new MongoClient(url);




app.post("/signup", (req: any, res: any) => {

  const {email, password, username, lastname, firstname, gender, dob} = req.body;

  if (username == "") {
    res.status(400).json({ message: "No username provided" });
  }
  if (password == "") {
    res.status(400).json({ message: "No password provided" });
  }
  if (firstname == "") {
    res.status(400).json({ message: "No firstname provided" });
  }
  if (lastname == "") {
    res.status(400).json({ message: "No lastname provided" });
  }
  if (dob == "") {
    res.status(400).json({ message: "No dob provided" });
  }
  if (email == "") {
    res.status(400).json({ message: "No email provided" });
  }
  if (gender == "") {
    res.status(400).json({ message: "No gender provided" });
  }
  console.log(req.body);

  const insertUsers = (db: any, callback: (data: any) => void) => {
    
    bcrypt.hash(password, 10)
    .then((hashedPassword: string) => {
      return hashedPassword
    })
    .catch((err: string) => {
      res.status(400).json({
        message: 'unable to hash password'
      })
    })
    
    const usersCollection = db.collection("users");
    usersCollection.insertOne(
      {
        username: username,
        firstname: firstname,
        lastname: lastname,
        dob: dob,
        email: email,
        gender: gender,
        password: password
      },
      (err: any, result: any) => {
        if (err) {
          return err;
        } else {
          // console.log("d res >>>>>", result);

          return result;
        }
      }
    );
  };

  client.connect((err: any) => {
    if (err) {
      console.log("for error >>>", err);
      return client.close();
    } else {
      console.log("Connected successfully to server");

      const db = client.db(mydb);

      insertUsers(db, (result: any) => {
        console.log("some result data", result);
        client.close();
      });
      client.close();
    }
  });

  // return res.send({
  //   "data": signUpData
  // });
  // delete signUpData.password
  return res.status(201).json({
    // return appropriate status code on data creation
    data: {
      message1: 'new message on success'
    },
  });
});

app.post("/signin", (req: any, res: any) => {
  if (!req.body.username) {
    return res.status(400).json({ message: "No username provided" });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: "No password provided" });
  }
  // const findDocuments = function(db: { collection: (arg0: string) => any; }, callback: (arg0: any) => void) {
    //   // Get the documents collection
    //   const collection = db.collection('users');
    //   // Find some documents
    
    //   collection.findOne({username: req.body.username, password: req.body.password}).toArray(function(err: any, user: any) {
      //     console.log('Found the following records');
      //     console.log(user);
      //     callback(user);
      //   });
      // };
      
      // client.connect((err: any)=>{
        //   if(err) {
          //     console.log("for error >>>", err);
          //     return client.close();
          //   }else {
            //   const db = client.db(mydb);
            //   findDocuments(db, (result: any) => {
              //     console.log("some result data", result);
              //     client.close()
              //   })
              //   }
              // })
              
              if(req.body.username && req.body.password){
                
                MongoClient.connect(url, function(err: any, db: { db: (arg0: string) => any; close: () => void; }){
                  var dbo = db.db('newusual');
                  
                  var onequery = { password: 'password'}
      //             dbo.collection('users').find({}).toArray(function(err: any, result: any){
      //               if (err) throw err
      //               console.log('d result >>>', result);
      //   db.close()
      // })
      
      // dbo.collection("users").findOne({}, function(err: any, result: any) {
      //   if (err) throw err;
      //   console.log(result);
      //   db.close();
      // });
  //     var query = { password: "password" };
  // dbo.collection("users").find(query).toArray(function(err: any, result: any) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

      //   var query = {username: "username", password: "password"}
      //   dbo.collection('users').find(query, function(err: string | undefined, user: any){
      //     if(err) throw new Error(err);
      //     if(!user) 
      //       console.log('Not found');
      //     else 
      //       console.log('Found!');
      // })
      // db.close();
      // res.end();
      
      var query = {username: req.body.username, password: req.body.password}
    dbo.collection("users").find(query).toArray(function(err: any, result: any) {
      if (err) throw err;
      console.log(result);
      db.close();
    });

      // var query = {username: req.body.username, password: req.body.password}
      //     var output = dbo.collection('users').findOne(query)
      //     if(output == req.body.username){
      //         console.log('Found');
      //     }else{
      //         console.log('Not found');
      //     }
      //     db.close();
      //     res.end();
      // dbo.collection('users').findOne(query, function(err: string | undefined, user: any){
      //   if(err) throw new Error(err);
      //   if(!user) 
      //     console.log('Not found');
      //   else 
      //     console.log('Found!');
      // }) 
    })
    res.status(200).json({
      message: 'log in success' 
    })            
  }
})

// username = req.body.username;
// password = req.body.password;
// MongoClient.connect(urldb, function(err, db){
//     var dbo = db.db('LCC');
//     
// var query = {username: username, password: password}
//     var output = dbo.collection('Users').find(query)
//     if(output == username){
//         console.log('Found');
//     }else{
//         console.log('Not found');
//     }
//     db.close();
//     res.end();
// dbo.collection('Users').findOne(query, function(err, user){
//   if(err) throw new Error(err);
//   if(!user) 
//     console.log('Not found');
//   else 
//     console.log('Found!');
// })

app.put("/update-profile", (req: any, res: any) => {
  // res.send("Profile Updated!");
  if(req.body.username == ""){
    res.status(400).json({
      message: 'username not provided'
    })
  }
  if(req.body.email == ""){
    res.status(400).json({
      message: 'email not provided'
    })
  }
  if(req.body.gender == ""){
    res.status(400).json({
      message: 'gender not provided'
    })
  }
  if(req.body.username && req.body.email && req.body.gender) {
    MongoClient.connect(url, function(err: any, db: { db: (arg0: string) => any; close: () => void; }) {
      if (err) throw err;
      var dbo = db.db("newusual");
      var myquery = { username: req.body.username };
      var newvalues = { $set: {email: req.body.email, gender: req.body.gender } };
      dbo.collection("users").updateOne(myquery, newvalues, function(err: any, res: any) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
      });
    });

    res.status(200).json({
      message: 'put success' 
    }) 

  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
