import React, { useState } from "react";
import Task from "./Task";
import "./Task.css";

const Group = ({ group }) => {
  const [down, setDown] = useState(true);
  return (
    <div className="group">
      <div className="flex">
        {/* <div className="dropdown">&#9654;</div> */}
        <div className="dropdown" onClick={() => setDown(!down)}>
          {down ? <span>&#9660;</span> : <span>&#9654;</span>}
        </div>
        <h3 className="mr-1">{group.title}</h3>
        <button className="btn-hover">+</button>
      </div>

      <div className={down ? "task-list" : ""}>
        {down &&
          group.tasks.map((t, i) => {
            return <Task key={i} task={t} />;
          })}
      </div>
    </div>
  );
};

export default Group;
