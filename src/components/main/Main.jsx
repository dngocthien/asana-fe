import React, { useState } from "react";
import Group from "../task/Group";
import "./Main.css";

const Main = () => {
  const data_groups = [
    {
      title: "task group 1",
      tasks: [
        { name: "task a", complete: false },
        { name: "task b", complete: false },
      ],
    },
    {
      title: "task group 2",
      tasks: [
        { name: "task 1", complete: true },
        { name: "task 2", complete: false },
      ],
    },
  ];
  const [groups, setGroups] = useState(data_groups);
  return (
    <div className="main">
      <small className="pl-2 txt-gray">Task name</small>
      {groups.map((g, i) => {
        return <Group key={i} group={g} />;
      })}
    </div>
  );
};

export default Main;
