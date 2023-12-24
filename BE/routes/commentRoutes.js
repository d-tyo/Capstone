const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//"/:" end point created so that a specific /unique URL where an API or web service  can be accessed. 


router.get("/", (req, res) => { //root endpoint - default
  Controllers.commentController.getComments(res);
});

// router.get("/init", (req, res) => {  //init endpoint - specialised endpoint for a specific functionality (creating/ assigning)
//   Controllers.popcommentController.storecomment(res); // view comment(s)
// });

router.post("/create", (req, res) => {
  Controllers.commentController.createComment(req.body, res); //create new comment
});

router.put("/:id", (req, res) => {
  Controllers.commentController.updateComment(req, res);//update comment
});

router.delete("/:id", (req, res) => {
  Controllers.commentController.deleteComment(req, res);
});

module.exports = router;
