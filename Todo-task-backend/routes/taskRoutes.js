const express = require("express");
const route = express.Router();
const userController = require("../controllers/userControllers");
const task = require("../controllers/taskControllers");
const auth = require("../middleware/authMiddleware");

// USER ROUTES
route.post("/register", userController.createUser);
route.post("/login", userController.login);

route.get("/users", userController.getUsers);
route.get("/users/:id", userController.getUserById);
route.put("/users/:id", userController.updateUsers);
route.delete("/users/:id", userController.deleteUser);

// TASK ROUTES (Protected)
route.post("/tasks", auth, task.createTask);        // Create
route.get("/tasks", auth, task.getTasks);           // Get all tasks for logged-in user
route.get("/tasks/:id", auth, task.getTaskById);    // Get one task (owned by user)
route.put("/tasks/:id", auth, task.updateTasks);    // Update
route.delete("/tasks/:id", auth, task.deleteTask);  // Delete

module.exports = route;
