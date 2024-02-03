import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";
import List from "./components/List/List";

const URL = "http://localhost:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  const fetchTasks = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    if (taskName.trim() !== "") {
      try {
        await fetch(URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ taskName: taskName }),
        });

        setTaskName("");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const updateTaskCompletion = async (taskId, isCompleted) => {
    try {
      await fetch(`${URL}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isCompleted }),
      });

      setTasks((prevTasks) => {
        prevTasks.map((task) =>
          task.task_id === taskId
            ? { ...task, is_completed: !task.is_completed }
            : task
        );
      });
    } catch (err) {
      console.log("Error with updating task", err);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      await fetch(`${URL}/${taskId}`, {
        method: "DELETE",
      });

      setTasks((prevTasks) => {
        prevTasks.filter((task) => task.task_id !== taskId);
      });
    } catch (err) {
      console.log("Error with deleting task", err);
    }
  };

  return (
    <div>
      <Header></Header>
      <div className="list-wrapper">
        <AddTask
          taskName={taskName}
          setTaskName={setTaskName}
          handleFormSubmission={handleFormSubmission}
        ></AddTask>
        <List
          tasks={tasks}
          updateTaskCompletion={updateTaskCompletion}
          deleteTask={deleteTask}
        ></List>
      </div>
    </div>
  );
}

export default App;
