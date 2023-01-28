const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcryptjs");

// require("dotenv").config();

const userRouter = express.Router();

// async function userAlreadyExisted() {
//   let user = await User.findOne({ email });
//   return user != null;
// }
userRouter.post("/register", async (req, res) => {
  const { name, email, pass, age } = req.body;
  // if (userAlreadyExisted) {
  //   res.send("User already registered");
  // }
  //salt round : no of rounds of hashing
  //err : error encountered while hashing
  try {
    bcrypt.hash(pass, 5, async (err, secPass) => {
      if (err) {
        console.log(err);
      } else {
        const user = new User({ name, email, pass: secPass, age });
        await user.save();
        res.send("Registered");
      }
    });
  } catch (err) {
    res.send("Error in registering the user");
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const user = await User.find({ email });
    const hashed_pass = user[0].pass;
    if (user.length > 0) {
      bcrypt.compare(pass, hashed_pass, (err, result) => {
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
