"use strict";

const bcrypt = require('bcryptjs')
require("dotenv").config(); //dotenv to read .env
let Models = require("../models"); //matches index.js
const jwt = require("jsonwebtoken"); // CommonJS syntax




//CRUD OPERATIONS

const getTeachers = (res) => {
  // finds all Teacher
  Models.Teacher.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const createTeachers= async (data, res) => {
  // Hash the user's password
  data.password = await bcrypt.hash(data.password, 10);
  // Create a new user in the User model
  Models.Teacher.create(data).then(function (data) {
      // Send the data as response
      res.send({ result: 200, data: data })
  }).catch(err => {
      // If there is an error, throw it
      throw err
  })
}

const loginUser = (data, res) => {
  console.log (data)
  
  // Find the user with the given email in the User model
   Models.Teacher.findOne({ where: { email: data.email } }) .then
  (async function (user) {
  // If the user exists and the password is correct, send the user data as a response
  if (user && (await bcrypt.compare(data.password, user.password))) {
  // Replace "your-secret-key" with your actual secret key
  const secretKey = "81828384"; //enable access to payload
  
  // Create a payload with user information
  const payload = {
  userId: user.id,
  email: user.email,
  };
  
  console.log(user)
  
  // Generate a token with jwt.sign
  const token = jwt.sign(payload, process.env.JWT_KEY, { expiresIn: "1h" });
  
  // Send the user data and token in the response
  res.send({ result: 200, data: { user, token } });
  } else {
  res.send({ result: 400, data: "Invalid User" });
  }
  }
  ).catch((err) => {
  // If there is an error, handle it
  console.error(err);
  res.status(500).send({ result: 500, data: "Internal Server Error" });
  });
  };

const updateTeacher =  async (req, res) => {
  // updates the Teacher matching the ID from the param using JSON data Teachered in request body
  console.log(req.body);
  req.body.password = await bcrypt.hash(req.body.password, 10);
  Models.Teacher.update(req.body, { where: { id: req.params.id } })

    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteTeacher = (req, res) => {
  // deletes the Teacher matching the ID from the param
  Models.Teacher.destroy({ where: { id: req.params.id } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createTeachers,
  updateTeacher,
  getTeachers,
  deleteTeacher,
  loginUser
 
};