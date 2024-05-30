const express = require("express");
const userRouter = express.Router();
const usersController = require("../controllers/usersController");

userRouter
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

userRouter
  .route("/:id")
  .get(usersController.getUser)
  .patch(usersController.updateUser)
  .delete(usersController.deleteUser);

module.exports = userRouter;
