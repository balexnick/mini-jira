const express = require("express");
const router = express.Router();
const ClientsController = require("../controllers/ClientsController");
const UserController = require("../controllers/UsersContloroller");
const jwtToken = require("../utils/jwtToken").verifyToken;

router.post("/register", UserController.register);

router.post("/find", UserController.findCurrent);

router.get("/allUsers", UserController.allUsers);

router.post("/login", UserController.login);

router.get("/clients", ClientsController.all);

router.post("/create", jwtToken, ClientsController.create);

router.put("/update/:id", jwtToken, ClientsController.update);

router.delete("/delete/:id", jwtToken, ClientsController.remove);

module.exports = router;
