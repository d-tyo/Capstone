"use strict";
let Models = require("../models"); // matches index.js

const getPosts = (res) => {
  // finds all users
  Models.Post.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createPost = (data, res) => {
  // creates a new user using JSON data POSTed in request body
  console.log(data);
  Models.Post.create(data)
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// see https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#basic-example
const getUserPosts = (req, res) => {
    // finds all posts for a given user and populates with matching user details
    Models.Post.findAll({ where: { userId: req.params.uid } })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
  getPosts,
  createPost,
  getUserPosts,
 
};