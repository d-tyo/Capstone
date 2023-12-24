"use strict";
const Models = require("../models");

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
  deleteStudent
};
