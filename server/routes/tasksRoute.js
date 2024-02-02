const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.getTasks);
router.post("/", tasksController.createTask);
router.put("/:taskId", tasksController.updateTaskCompletion);
router.delete("/:taskId", tasksController.deleteTask);

module.exports = router;
