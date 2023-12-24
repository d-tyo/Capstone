let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get("/", (req, res) => {
  Controllers.lessonController.getLessons(res);
});

router.post("/create", (req, res) => {
  Controllers.lessonController.createLesson(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.lessonController.updateLesson(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.lessonController.deleteLesson(req, res);
});

module.exports = router;
