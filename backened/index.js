const connect = require("./db.js");
const express = require("express");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const userRouter = require("./routes/auth");
const newsRouter = require("./routes/notes");
connect();

const app = express();

const port = 3000;

app.use(express.json());

app.use("/users", userRouter);
app.use("/notes", newsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
