const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const Student = require("./models/Student");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.get("/getStudents", async function(req, res) {
  const data = await fetch("http://localhost:3000/")
  const parsedData = await data.text()
  console.log(parsedData)
  const students = await Student.find();
  const names = students.map(s => s.name);
  res.send(names);
});

app.post("/addStudent", async function(req, res) {
  const student = await Student({ name: req.body.name });
  await student.save();
  const students = await Student.find();
  const names = students.map(s => s.name);
  res.send(names);
});

app.post("/deleteStudent", async function(req, res) {
  const student = await Student.deleteMany({ name: req.body.name });
  const students = await Student.find();
  const names = students.map(s => s.name);
  res.send(names);
});

app.listen(8000, function() {
  console.log("Listening on http://localhost:8000");
});
