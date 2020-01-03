const express = require("express");
const router = express.Router();
const TasksController = require("../controllers/TasksController");
const { register, findCurrent, allUsers, login, editUser } = require("../controllers/UserController");
const jwtToken = require("../utils/jwtToken").verifyToken;

router.post("/register", register);

router.post("/find", jwtToken, findCurrent);

router.get("/allUsers", allUsers);

router.post("/login", login);

router.post("/editUser", jwtToken, editUser);

router.get("/tasks", jwtToken, TasksController.all);

router.post("/create", jwtToken, TasksController.create);

router.put("/update/:id", jwtToken, TasksController.update);

router.delete("/delete/:id", jwtToken, TasksController.remove);

module.exports = router;
