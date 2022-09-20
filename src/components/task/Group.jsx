import React, { useState } from "react";
import Task from "./Task";
import "./Task.css";

const Group = ({ group }) => {
  const [down, setDown] = useState(true);
  const [add, setAdd] = useState(false);
  const newTask = { name: "", complete: false };
  return (
    <div className="group">
      <div className="flex pl-2">
        <div className="dropdown" onClick={() => setDown(!down)}>
          {down ? (
            <div className="arrow-down" />
          ) : (
            <div className="arrow-right" />
          )}
        </div>
        <h3 className="mr-1">{group.title}</h3>
        <button className="btn-hover">+</button>
      </div>

      <div className={down ? "group-list" : ""}>
        {down &&
          group.tasks.map((t, i) => {
            return <Task key={i} task={t} fc={"n"} />;
          })}
      </div>

      {add && <Task task={newTask} />}

      <div className="task" onClick={() => setAdd(!add)}>
        <div className="ml-3 txt-gray">Add task...</div>
      </div>
    </div>
  );
};

export default Group;
