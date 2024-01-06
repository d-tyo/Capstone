"use strict";
let Models = require("../models"); //matches index.js

// upload an image from a FE form onto the BE server: https://www/positronx.io/react-file-upload-tutorial-with-node-express-and-multer/

const addLesson = (req, res) => {
  console.log(req.file)// save filename is in req.file.filename
  const lessonUpdates = { filePath : '/lesson/'+ req.file.filename, title: req.body.lessonTitle };
  console.log(lessonUpdates);
  
  //save path to uploaded file in DB for this user
  Models.Lesson.update(
    lessonUpdates,
    { where: {id:req.params.lessonId}}
  ).then(response =>
    res.status(200).json({result:'File uploaded to folder successfully', data: lessonUpdates}) // send updated info back in response
    ).catch(err =>
      res. status(500).json({result: err.message}) 
    )
}

const getLessons = (res) => {
  // finds all Lessons
  Models.Lesson.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getLesson = (req, res) => {
  Models.Lesson.findAll({where:{id : req.params.id}})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createLesson = (data, res) => {
  // creates a new Lessons using JSON data Lessonsed in request body
  console.log(data);
  new Models.Lesson(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const updateLesson = (req, res) => {
  // updates the Lessons matching the ID from the param using JSON data Lessonsed in request body
  console.log(req.body);
  Models.Lesson.update(req.body, { where: { id: req.params.id } })

  .then((data) => res.send({ result: 200, data: data }))
  .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

const deleteLesson = (req, res) => {
  // deletes the Lessons matching the ID from the param
  Models.Lesson.destroy({ where: { id: req.params.id } })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getLessons,
  getLesson,
  createLesson,
  updateLesson,
  deleteLesson,
  addLesson
};