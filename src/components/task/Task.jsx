import React from "react";
import "./Task.css";

const Task = (task) => {
  return (
    <div className="task">
      <span>{task.task.name}</span>
    </div>
  );
};

export default Task;
