import React, { useState } from "react";
import Group from "../task/Group";
import "./Main.css";
import project1 from "../../data";
import TaskDetails from "../task-details/TaskDetails";
import { useSelector } from "react-redux";

const Main = () => {
  const [groups, setGroups] = useState(project1);
  const openDetails = useSelector((state) => state.details);

  return (
    <div className="main flex-basic">
      <div className="project-tasks">
        <small className="pl-2 txt-gray">Task name</small>
        {groups.map((g, i) => {
          return <Group key={i} group={g} />;
        })}
      </div>

      {openDetails && <TaskDetails />}
    </div>
  );
};

export default Main;
