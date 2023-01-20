const connect = require("./db.js");
const express = require("express");
const User = require("./models/User");
const bcrypt = require("bcryptjs");
const userRouter = require("./routes/auth");
connect();

const app = express();
const port = 3000;

app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
