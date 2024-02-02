const tasksModel = require("../models/tasksModel");

async function createTask(req, res) {
  const { taskName } = req.body;
  try {
    await tasksModel.createTask(taskName);
    res.status(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function getTasks(req, res) {
  try {
    const data = await tasksModel.getTasks();
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function deleteTask(req, res) {
  const { taskId } = req.params;
  try {
    await tasksModel.deleteTask(taskId);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

async function updateTaskCompletion() {
  const { taskId } = req.params;
  const { isCompleted } = req.body;

  try {
    await tasksModel.updateTaskCompletion(isCompleted, taskId);
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

module.exports = { createTask, getTasks, updateTaskCompletion, deleteTask };
