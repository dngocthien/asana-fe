import React, { useState } from "react";
import "./SideBar.css";
import { deleteProject, saveProject } from "../../api/projects";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SideBar = ({ projects, refresh }) => {
  const [isShowAddProject, setIsShowAddProject] = useState(false);
  const [setting, setSetting] = useState(null);
  const [name, setName] = useState("");
  const project = useSelector((state) => state.project);

  const addProject = () => {
    setIsShowAddProject(false);
    saveProject({ name: name }).then(() => refresh());
  };

  const removeProject = (id) => {
    setSetting(false);
    deleteProject(id).then(() => refresh());
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header space-between">
        <p>My Workspace</p>
        <button
          className="btn-transparent"
          onClick={() => setIsShowAddProject(true)}
        >
          +
        </button>
      </div>

      {projects.map((p, i) => {
        return (
          <div key={i} className="project space-between">
            <div className="flex">
              <div className="project-dot" />
              <div>{p.name}</div>
            </div>
            <div className="btn-transparent relative">
              <div className="pb-1" onClick={() => setSetting(i)}>
                ...
              </div>
              {setting === i && (
                <div className="project-setting">
                  <div onClick={() => removeProject(p.id)}>Delete project</div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {isShowAddProject ? (
        <div className="project">
          <input
            type="text"
            autoFocus
            onChange={(e) => setName(e.target.value)}
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
