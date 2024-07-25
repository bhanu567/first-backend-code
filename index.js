require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("My name is Bhanu Prakash Jha");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to this Website</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`This app is listening on port ${port}`);
});
