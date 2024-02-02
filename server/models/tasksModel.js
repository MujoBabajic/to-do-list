const database = require("./dbConnection");

async function createTask(taskName) {
  try {
    await database.execute(`INSERT INTO tasks (task_name) VALUES (?)`, [
      taskName,
    ]);
  } catch (err) {
    console.log(err);
  }
}

async function getTasks() {
  try {
    const [rows] = await database.execute(`SELECT * FROM tasks`);
    return rows;
  } catch (err) {
    console.log(err);
  }
}

async function updateTaskCompletion(taskId, isCompleted) {
  try {
    await database.execute(
      `UPDATE tasks SET is_completed = ? WHERE task_id=?`,
      [isCompleted, taskId]
    );
  } catch (err) {
    console.log(err);
  }
}

async function deleteTask(taskId) {
  try {
    await database.execute(`DELETE FROM tasks WHERE task_id=?`, [taskId]);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createTask, getTasks, updateTaskCompletion, deleteTask };
