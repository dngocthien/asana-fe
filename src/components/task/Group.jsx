import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Task from "./Task";
import "./Task.css";

const Group = ({ group }) => {
  const dispatch = useDispatch();
  const [down, setDown] = useState(true);
  const [add, setAdd] = useState(false);
  const newTask = {
    id: null,
    name: "",
    complete: false,
    group: group.id,
  };

  const cancel = () => {
    setAdd(false);
  };
  return (
    <div className="group">
      <div className="group-header flex pl-2">
        <div className="dropdown" onClick={() => setDown(!down)}>
          {down ? (
            <div className="arrow-down" />
          ) : (
            <div className="arrow-right" />
          )}
        </div>

        <h3 className="mr-1">{group.title}</h3>

        <div className="group-utilities flex">
          <button className="btn-symbol mr-1">+</button>
          <button className="btn-symbol">
            <div className="pb-0">&#8230;</div>
          </button>
        </div>
      </div>

      {down && (
        <div className="group-tasks">
          {group.tasks.map((t, i) => {
            return (
              <Task key={i} task={t} focus={false} cancelAdd={() => cancel()} />
            );
          })}

          {add && (
            <Task task={newTask} focus={true} cancelAdd={() => cancel()} />
          )}

          <div
            className="task task-add"
            onClick={() => (
              setAdd(!add), dispatch({ type: "CURRENT", current: null })
            )}
          >
            <div className="txt-gray ml-2 py-q">Add task...</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
