const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//"/:" end point created so that a specific /unique URL where an API or web service  can be accessed. 


router.get("/", (req, res) => { //root endpoint - default
  Controllers.studentController.getStudents(res);
});

router.get("/init", (req, res) => {  //init endpoint - specialised endpoint for a specific functionality (creating/ assigning)
  Controllers.popStudentController.storeStudent(res); // view student(s)
});

router.post("/create", (req, res) => {
  Controllers.studentController.createStudents(req.body, res); //create new student
});

router.put("/:id", (req, res) => {
  Controllers.studentController.updateStudent(req, res);//update student
});

router.delete("/:id", (req, res) => {
  Controllers.studentController.deleteStudent(req, res);
});

module.exports = router;
