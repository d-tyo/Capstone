"use strict";
let Models = require("../models"); //matches index.js

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

const createTeachers = (data, res) => {
  // creates a new Teacher using JSON data Teachered in request body
  console.log(data);
  new Models.Teacher(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};


const updateTeacher = (req, res) => {
  // updates the Teacher matching the ID from the param using JSON data Teachered in request body
  console.log(req.body);
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
  deleteTeacher
};