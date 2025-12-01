const express = require("express");
const route = express.Router();
const userController = require("../controllers/userControllers");
const task = require("../controllers/taskControllers");
const auth = require("../middleware/authMiddleware");

route.post("/", userController.createUser);
route.post("/login", userController.login);
route.get("/", userController.getUsers);
route.get("/:id", userController.getUserById);
route.put("/:id", userController.updateUsers);
route.delete("/:id", userController.deleteUser);

route.post("/task", auth, task.createTask);
route.get("/get", auth, task.getTasks);
route.get("/:id", auth, task.getTaskById);
route.put("/:id", auth, task.updateTasks);
route.delete("/:id", auth, task.deleteTask);

module.exports = route;
