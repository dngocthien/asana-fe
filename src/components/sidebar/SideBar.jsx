import React, { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [projects, setProjects] = useState(["First Project", "Second Project"]);
  const [newProject, setNewProject] = useState(false);
  const [project, setProject] = useState("");

  const addProject = () => {
    setNewProject(false);
    setProjects([...projects, project]);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-header space-between">
        <p>My Workspace</p>
        <button className="btn-transparent" onClick={() => setNewProject(true)}>
          +
        </button>
      </div>

      {projects.map((p, i) => {
        return (
          <div key={i} className="project flex">
            <div className="project-dot" />
            <span>{p}</span>
          </div>
        );
      })}
      {newProject ? (
        <div className="project">
          <input
            type="text"
            onChange={(e) => setProject(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addProject();
              }
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SideBar;
