import React from "react";
import "./List.css";

const List = ({ tasks, updateTaskCompletion, deleteTask }) => {
  console.log(tasks);
  return (
    <ul>
      {tasks &&
        tasks.map((task) => (
          <li key={task.task_id}>
            <div
              style={{
                textDecoration: task.is_completed ? "line-through" : "none",
              }}
            >
              <input
                type="checkbox"
                checked={task.is_completed}
                onChange={() =>
                  updateTaskCompletion(task.task_id, !task.is_completed)
                }
              ></input>
              {task.task_name}
            </div>
            <button onClick={() => deleteTask(task.task_id)}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default List;
