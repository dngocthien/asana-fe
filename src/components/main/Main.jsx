import React, { useState } from "react";
import Group from "../task/Group";
import "./Main.css";

const Main = () => {
  const data_groups = [
    {
      title: "task group 1",
      id: 1,
      tasks: [
        { id: 1, name: "task a", complete: false, group: 1 },
        { id: 2, name: "task b", complete: false, group: 1 },
      ],
    },
    {
      title: "task group 2",
      id: 2,
      tasks: [
        { id: 3, name: "task 1", complete: true, group: 2 },
        { id: 4, name: "task 2", complete: false, group: 2 },
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
