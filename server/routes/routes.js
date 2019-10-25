const express = require("express");
const router = express.Router();
const TasksController = require("../controllers/TasksController");
const UserController = require("../controllers/UserController");
const jwtToken = require("../utils/jwtToken").verifyToken;

router.post("/register", UserController.register);

router.post("/find", UserController.findCurrent);

router.get("/allUsers", UserController.allUsers);

router.post("/login", UserController.login);

router.get("/tasks", TasksController.all);

router.post("/create", jwtToken, TasksController.create);

router.put("/update/:id", jwtToken, TasksController.update);

router.delete("/delete/:id", jwtToken, TasksController.remove);

module.exports = router;
