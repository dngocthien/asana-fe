import React, { useState } from "react";
import "./Task.css";

const Task = (task, fc) => {
  console.log(fc.fc);
  const [name, setName] = useState(task.task.name);
  return (
    <div className="task space-between">
      <div>
        {task.task.complete ? (
          <span className="task-tick task-tick-complete mr-1 tooltip">
            &#10003;
            <span className="tooltiptext">Mark task incomplete</span>
          </span>
        ) : (
          <span className="task-tick task-tick-incomplete mr-1 tooltip">
            &#10003;
            <span className="tooltiptext">Mark task complete</span>
          </span>
        )}

        <span>
          <input
            className="input-hover"
            style={{ width: (name.length + 1) * 8 + "px" }}
            defaultValue={task.task.name}
            onChange={(e) => setName(e.target.value)}
          />
        </span>
      </div>

      <div className={fc == "y" ? " focus" : "flex"}>
        <div className="task-move">
          &darr; <div className="task-move-i">&uarr;</div>{" "}
        </div>

        <div className="task-btn-details flex ml-1">
          Detail <div className="arrow-stretched"> &gt;</div>
        </div>
      </div>
    </div>
  );
};

export default Task;
