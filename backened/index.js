const connect = require("./db.js");
const express = require("express");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const userRouter = require("./routes/auth");
const newsRouter = require("./routes/notes");
const cors=require("cors")

const app=express()
app.use(cors())
app.use(express.json())

connect();



const port = 8080;



app.use("/users", userRouter);
app.use("/notes", newsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
