const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//"/:" end point created so that a specific /unique URL where an API or web service  can be accessed. 


router.get("/", (req, res) => { //root endpoint - default
  Controllers.lessonStatusController.getLessonStatus(res);
});

// router.get("/init", (req, res) => {  //init endpoint - specialised endpoint for a specific functionality (creating/ assigning)
//   Controllers.poplessonStatusController.storelessonStatus(res); // view lessonStatus(s)
// });

router.post("/create", (req, res) => {
  Controllers.lessonStatusController.createLessonStatus(req.body, res); //create new lessonStatus
});

router.put("/:id", (req, res) => {
  Controllers.lessonStatusController.updateLessonStatus(req, res);//update lessonStatus
});

router.delete("/:id", (req, res) => {
  Controllers.lessonStatusController.deleteLessonStatus(req, res);
});

module.exports = router;
