import { connect } from "node:http2";


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
  if (!req.body.email) {
    return res.status(400).json({ message: "No email provided" });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: "No password provided" });
  }
  if(req.body.email && req.body.password){
    res.status(200).json({
      message: 'log in success' 
    })
    const findDocuments = function(db: { collection: (arg0: string) => any; }, callback: (arg0: any) => void) {
      // Get the documents collection
      const collection = db.collection('users');
      // Find some documents
      collection.find({}).toArray(function(err: any, docs: any) {
        console.log('Found the following records');
        console.log(docs);
        callback(docs);
      });
    };

    client.connect((err: any)=>{
      if(err) {
        console.log("for error >>>", err);
        return client.close();
      }else {
      const db = client.db(mydb);
      findDocuments(db, (result: any) => {
        console.log("some result data", result);
        client.close()
      })
      }
    })
    
  }
});

app.put("/update-profile", (req: any, res: any) => {
  // res.send("Profile Updated!");
  if(req.body.username == ""){
    res.status(400).json({
      message: 'username not provided'
    })
  }
  if(req.body.email){
    res.status(400).json({
      message: 'email not specified'
    })
  }
  if(req.body.email && req.body.username) {
    //get values then update the db
    const updateDocument = function(db: { collection: (arg0: string) => any; }, callback: (arg0: any) => void) {
      // Get the documents collection
      const collection = db.collection('documents');
      // Update document where a is 2, set b equal to 1
      collection.updateOne({ a: 2 }, { $set: { b: 1 } }, function(err: any, result: any) {
        console.log('Updated the document with the field a equal to 2');
        callback(result);
      });
    };

    client.connect((err: any)=>{
      if (err) {
        console.log('update error', err);
      }else {
      const db = client.db(mydb);
      // insertDocuments(db, function() {
        updateDocument(db, function() {
          client.close();
        });
      // });
      }
    })
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
