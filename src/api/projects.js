import { DB_URL } from "../constants";

export const fetchProjects = async () => {
  const json = await fetch(DB_URL + "projects");
  return await json.json();
};

export const postProject = async (project) => {
  const json = await fetch(DB_URL + "projects", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
  return await json.json();
};

export const deleteProject = async (id) => {
  const json = await fetch(DB_URL + "projects/" + id, { method: "delete" });
  return await json.json();
};
