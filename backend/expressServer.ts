import { sign } from "node:crypto";

const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port: number = 3010;

const url = "mongodb://localhost:27017";
const mydb = "newusual";

const client = new MongoClient(url);

const replyError = (err: any, res: any) => {
  return res;
};

app.post("/signup", (req: any, res: any) => {
  if (!req.body.username) {
    res.status(400).json({ message: "No username provided" });
  }
  if (!req.body.password) {
    res.status(400).json({ message: "No password provided" });
  }
  if (!req.body.firstname) {
    res.status(400).json({ message: "No firstname provided" });
  }
  if (!req.body.lastname) {
    res.status(400).json({ message: "No lastname provided" });
  }
  if (!req.body.dob) {
    res.status(400).json({ message: "No dob provided" });
  }
  if (!req.body.email) {
    res.status(400).json({ message: "No email provided" });
  }
  if (!req.body.gender) {
    res.status(400).json({ message: "No gender provided" });
  }
  console.log(req.body);

  const signUpData = req.body;

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

  const insertUsers = (db: any, callback: (data: any) => void) => {
    const usersCollection = db.collection("users");

    usersCollection.insertOne(
      {
        username: signUpData.username,
        firstname: signUpData.firstname,
        lastname: signUpData.lastname,
        dob: signUpData.dob,
        email: signUpData.email,
        gender: signUpData.gender,
        password: signUpData.password
      },
      (err: any, result: any) => {
        if (err) {
          return err;
        } else {
          console.log("d res >>>>>", result);

          return result;
        }
      }
    );
  };

  // return res.send({
  //   "data": signUpData
  // });

  return res.status(201).json({
    // return appropriate status code on data creation
    data: signUpData,
  });
});

app.post("/signin", (req: any, res: any) => {
  res.send("Sign in Succesful!");
});

app.put("/update-profile", (req: any, res: any) => {
  res.send("Profile Updated!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
