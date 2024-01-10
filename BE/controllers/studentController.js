"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken"); // CommonJS syntax
require("dotenv").config(); //dotenv to read .env

// CRUD OPERATION

const getStudents = (res) => {
  Models.Student.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const createStudents = async (data, res) => {
  console.log(data)
  data.password = await bcrypt.hash(data.password, 10);
  Models.Student.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      res.send({ result: 500, data: err.message });
    });
};

const loginUser = (data, res) => {
  console.log (data)
  
  // Find the user with the given userName in the User model
   Models.Student.findOne({ where: { userName: data.userName } }) .then
  (async function (user) {
  // If the user exists and the password is correct, send the user data as a response
  if (user && (await bcrypt.compare(data.password, user.password))) {
  // Replace "your-secret-key" with your actual secret key
  const secretKey = "81828384"; //enable access to payload
  
  // Create a payload with user information
  const payload = {
  userId: user.id,
  userName: user.userName,
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

const updateStudent = (req, res) => {
  Models.Student.update(req.body, { where: { id: req.params.id } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};
const deleteStudent = (req, res) => {
  Models.Student.destroy({ where: { id: req.params.id } })
  .then((data) => res.send({ result: 200, data: data }))
  .catch((err) => {
        console.log(err);
        res.send({ result: 500, error: err.message });
      });
    };

module.exports = {
  createStudents,
  getStudents,
  updateStudent,
  deleteStudent,
  loginUser
};
