"use strict";
let Models = require("../models"); //matches index.js

const getGuestUsers = (res) => {
  // finds all GuestUsers
  Models.GuestUser.findAll({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createGuestUser = (data, res) => {
  // creates a new GuestUsers using JSON data GuestUsersed in request body
  console.log(data);
  new Models.GuestUser(data)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};



const updateGuestUser = (req, res) => {
  // updates the GuestUsers matching the ID from the param using JSON data GuestUsersed in request body
  console.log(req.body);
  Models.GuestUser.update(req.body, { where: { id: req.params.id } })

    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteGuestUser = (req, res) => {
  // deletes the GuestUsers matching the ID from the param
  Models.GuestUser.destroy({ where: { id: req.params.id } })
  .then((data) => res.send({ result: 200, data: data }))
  .catch((err) => {
    console.log(err);
    res.send({ result: 500, error: err.message });
  });
};

module.exports = {
  getGuestUsers,
  createGuestUser,
  updateGuestUser,
  deleteGuestUser
};