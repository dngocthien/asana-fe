import React, { useState } from "react";
import "./SideBar.css";
import { deleteProject, postProject } from "../../api/projects";
import { useDispatch, useSelector } from "react-redux";

const SideBar = ({ projects, refresh }) => {
  const [isShowAddProject, setIsShowAddProject] = useState(false);
  const [setting, setSetting] = useState(null);
  const [name, setName] = useState("");
  const project = useSelector((state) => state.project) || { id: 0 };

  const dispatch = useDispatch();

  const addProject = () => {
    setIsShowAddProject(false);
    postProject({ name: name }).then(() => refresh());
  };

  const removeProject = (id) => {
    setSetting(false);
    deleteProject(id).then(() => refresh());
  };

  return (
    <div className="sidebar" onBlur={() => setSetting(-1)}>
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
          <div
            key={i}
            className={
              project.id === p.id
                ? "project project-focus space-between"
                : "project space-between"
            }
            onClick={() => dispatch({ type: "PROJECT", project: p })}
          >
            <div className="flex">
              <div className="project-dot" />
              <div>{p.name}</div>
            </div>
            <div className="btn-transparent relative">
              <div className="pb-1" tabIndex={0} onFocus={() => setSetting(i)}>
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
