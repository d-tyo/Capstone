let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js


// "/:" end point created so that a specific /unique URL where an API or web service  can be accessed. 

router.get("/", (req, res) => {//root endpoint - default
  Controllers.teacherController.getTeachers(res);
});

router.get("/init", (req, res) => { //init endpoint - specialised endpoint for a specific functionality (creating/ assigning)
  Controllers.popTeacherController.storeTeacher(res);
});

router.post("/create", (req, res) => { 
  Controllers.teacherController.createTeachers(req.body, res); //create teacher(s)
});

router.post("/login", (req, res) => { 
  Controllers.teacherController.loginUser(req.body, res); //login User
});


router.put("/:id", (req, res) => {
  Controllers.teacherController.updateTeacher(req, res); //update teacher
});

router.delete("/:id", (req, res) => {
  Controllers.teacherController.deleteTeacher(req, res);
});



module.exports = router;
