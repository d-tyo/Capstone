"use strict";
const Student = require("./student"); //require the model
// const Grade = require("./grade"); //require the model //possible usage
const Teacher = require("./teacher"); //require the model
const Lesson = require("./lesson"); //require the model
const LessonStatus = require("./lessonStatus"); //require the model
const Comment = require("./comment"); //require the model
const GuestUser = require("./guestUser"); //require the model

async function init() {

  await Teacher.sync(); // squelize method to sync the model
  await Student.sync(); // checking whether the model exist  //possible usage
  // await Grade.sync(); //sync the model
  await Lesson.sync(); 
  await LessonStatus.sync(); // checking whether the model exist  //possible usage
  // await Grade.sync(); //sync the model
  await Comment.sync(); // squelize method to sync the model
  await GuestUser.sync(); // squelize method to sync the model
  
}
init();

module.exports = {
  Student,
  // Grade,//possible usage
  Teacher, //export the model
  Lesson,
  LessonStatus,
  Comment, 
  GuestUser
};


//central point managing, updating model imports