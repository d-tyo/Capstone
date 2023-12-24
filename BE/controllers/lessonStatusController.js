"use strict";
let Models = require("../models"); //matches index.js

const getLessonStatus = (res) => {
  // finds all LessonStatus
  Models.LessonStatus.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLessonStatus = (data, res) => {
  // creates a new LessonStatus using JSON data LessonStatused in request body
  console.log(data);
  new Models.LessonStatus(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const updateLessonStatus = (req, res) => {
  // updates the LessonStatus matching the ID from the param using JSON data LessonStatused in request body
  console.log(req.body);
  Models.LessonStatus.update(req.body, { where: { id: req.params.id } })

    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteLessonStatus = (req, res) => {
    console.log(req.params.id)
  // deletes the LessonStatus matching the ID from the param
  Models.LessonStatus.destroy({ where: { id: req.params.id } })
  .then((data) => res.send({ result: 200, data: data }))
  .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

module.exports = {
  getLessonStatus,
  createLessonStatus,
  updateLessonStatus,
  deleteLessonStatus
};