"use strict";
const Models = require("../models");
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken"); // CommonJS syntax

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
const createStudents = (data, res) => {
  console.log(data)
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
  // Find the user with the given email in the User model
  Models.Student.findOne({where: { userName: data.userName } }).then(
  async function (user) {
  // If the user exists and the password is correct, send the user data as a response
  if (user && (await bcrypt.compare(data.password, user.password))) {
  // Replace "your-secret-key" with your actual secret key
  const secretKey = "817960";
  
  // Create a payload with user information
  const payload = {
  userId: user.id,
  userNamel: user.userName,
  };
  
  // Generate a token with jwt.sign
  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
  
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
