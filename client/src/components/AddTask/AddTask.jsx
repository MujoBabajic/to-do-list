import React from "react";
import "./AddTask.css";

const AddTask = ({ taskName, setTaskName, handleFormSubmission }) => {
  return (
    <form onSubmit={handleFormSubmission}>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task..."
      ></input>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTask;
