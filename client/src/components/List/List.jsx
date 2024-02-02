import React from "react";
import "./listStyle.css";

const List = ({ tasks, updateTask, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.task_id}>
          <div
            style={{
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => updateTask(task.task_id, !task.completed)}
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
