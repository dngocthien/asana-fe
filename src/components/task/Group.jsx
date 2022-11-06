import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { putGroup } from "../../api/groups";
import Task from "./Task";
import "./Task.scss";

const Group = ({ group }) => {
  // console.log(group);
  const dispatch = useDispatch();
  const [down, setDown] = useState(true);
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [name, setName] = useState(group.name);
  const newTask = {
    id: null,
    name: "",
    complete: false,
    groupIdList: [group.id],
  };

  const updateGroup = (e) => {
    group.name = name;
    putGroup(group, group.id).then((res) => setIsNameFocused(false));
  };

  const cancel = () => {
    setIsAdd(false);
  };

  useEffect(() => {
    if (group.name === "") {
      setIsNameFocused(true);
    }
  }, []);
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

        <div
          onClick={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
        >
          {isNameFocused ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoFocus
              className="input-click_focus"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  updateGroup();
                }
              }}
            />
          ) : (
            <div className="input-click">
              {group.name === "" ? "Untitled Section" : group.name}
            </div>
          )}
        </div>

        <div className="group-utilities flex">
          <button className="btn-symbol ml-1" onClick={() => setIsAdd(!isAdd)}>
            +
          </button>
          <button className="btn-symbol ml-1">
            <div className="pb-0">&#8230;</div>
          </button>
        </div>
      </div>

      {isAdd && group.taskList.length === 0 && (
        <Task
          setIsAdd={setIsAdd}
          task={newTask}
          focus={true}
          cancelAdd={() => cancel()}
        />
      )}

      {down && group.taskList.length > 0 && (
        <div className="group-tasks">
          {group.taskList.map((t, i) => {
            return (
              <Task key={i} task={t} focus={false} cancelAdd={() => cancel()} />
            );
          })}

          {isAdd && (
            <Task
              setIsAdd={setIsAdd}
              task={newTask}
              focus={true}
              cancelAdd={() => cancel()}
            />
          )}

          <div
            className="task task-add"
            onClick={() => (
              setIsAdd(!isAdd), dispatch({ type: "CURRENT", current: null })
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
