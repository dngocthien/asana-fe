import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Task.css";

const Task = (props) => {
  const task = props.task;
  const dispatch = useDispatch();
  const [name, setName] = useState(task.name);
  const current = useSelector((state) => state.current);

  //if null then remove, else add new task
  const checkTask = () => {
    if (name == "") {
      props.cancelAdd();
    }
  };

  return (
    <div className={task.id === current ? "current" : ""}>
      <div
        className="task space-between"
        onClick={() => dispatch({ type: "CURRENT", current: task.id })}
      >
        <div className="flex">
          {task.complete ? (
            <div className="task-tick task-tick-complete mr-0 tooltip">
              &#10003;
              <span className="tooltiptext">Mark task incomplete</span>
            </div>
          ) : (
            <div className="task-tick task-tick-incomplete mr-0 tooltip">
              &#10003;
              <span className="tooltiptext">Mark task complete</span>
            </div>
          )}

          <div>
            <input
              className="input-hover"
              style={{
                width: (name.length == 0 ? 135 : (name.length + 1) * 7) + "px",
              }}
              defaultValue={task.name}
              autoFocus={props.focus}
              onBlur={() => checkTask()}
              placeholder="Write a task name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex">
          <div className="task-move">
            &darr; <div className="task-move-i">&uarr;</div>{" "}
          </div>

          <div className="task-btn-details flex ml-1">
            Detail <div className="arrow-stretched"> &gt;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
