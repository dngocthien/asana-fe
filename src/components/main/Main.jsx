import React, { useState } from "react";
import Group from "../task/Group";
import TaskDetails from "../task-details/TaskDetails";
import "./Main.css";
import project1 from "../../data";
import { useSelector } from "react-redux";
import Task from "../task/Task";
import { fetchGroupsByProjectId, postGroup } from "../../api/groups";
import { useEffect } from "react";

const Main = () => {
  const openDetails = useSelector((state) => state.details);
  const project = useSelector((state) => state.project);
  const [groups, setGroups] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const newTask = {
    id: null,
    name: "",
    complete: false,
    group: 0,
  };

  const addGroup = () => {
    const group = { name: "", projectId: project.id };
    postGroup(group);
  };

  const refresh = () => {
    fetchGroupsByProjectId(project.id).then((res) => setGroups(res));
    console.log(groups);
  };

  useEffect(() => {
    refresh();
  }, [project.id]);

  return (
    <div className="main flex-basic">
      <div className="project-tasks">
        <small className="pl-2 pb-1 txt-gray">Task name</small>

        {groups.length > 0 ? (
          groups.map((g, i) => {
            return <Group key={i} group={g} />;
          })
        ) : (
          <>
            {isAdd ? (
              <Task
                task={newTask}
                focus={true}
                cancelAdd={() => setIsAdd(false)}
              />
            ) : (
              <div className="task task-add" onClick={() => setIsAdd(!isAdd)}>
                <div className="txt-gray py-q">Click here to add a task...</div>
              </div>
            )}
          </>
        )}

        <div>
          <button
            className="btn-hover txt-bold ml-2"
            onClick={() => addGroup()}
          >
            + Add section
          </button>
        </div>
      </div>

      {openDetails && <TaskDetails />}
    </div>
  );
};

export default Main;
