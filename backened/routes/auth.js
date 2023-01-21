const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router();

async function userAlreadyExisted() {
    let user = await User.findOne({ email });
    return user != null;
}
userRouter.post("/register", (req, res) => {
  const { name, email, password, age } = req.body;
  if(userAlreadyExisted) {
      
      res.send("User already registered");
  }
  try {
    bcrypt.hash(password, 5, async (err, secPass) => {
      if (err) {
        console.log(err);
      } else {
        const user = new User({ name, email, password: secPass, age });
        await user.save();
        res.send(user);
      }
    });
  } catch (err) {
    res.send("Error in registering the user");
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email });
    const hashed_pass = user[0].password;
    if (user.length > 0) {
      bcrypt.compare(password, hashed_pass, (err, result) => {
        if (result) {
          const token = "abc";
          res.send({ msg: "Login Successfull", token: token });
        } else {
          res.send("Wrong Credntials");
        }
      });
    } else {
      res.send("Wrong Credntials");
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = userRouter;
