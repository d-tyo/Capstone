const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

//"/:" end point created so that a specific /unique URL where an API or web service  can be accessed. 


router.get("/", (req, res) => { //root endpoint - default
  Controllers.guestUserController.getGuestUsers(res);
});

// router.get("/init", (req, res) => {  //init endpoint - specialised endpoint for a specific functionality (creating/ assigning)
//   Controllers.popguestUserController.storeguestUser(res); // view guestUser(s)
// });

router.post("/create", (req, res) => {
  Controllers.guestUserController.createGuestUser(req.body, res); //create new guestUser
});

router.put("/:id", (req, res) => {
  Controllers.guestUserController.updateGuestUser(req, res);//update guestUser
});

router.delete("/:id", (req, res) => {
  Controllers.guestUserController.deleteGuestUser(req, res);
});

module.exports = router;
