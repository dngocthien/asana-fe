import { DB_URL } from "../constants";

export const fetchGroupsByProjectId = async (id) => {
  const json = await fetch(DB_URL + "groups/project/" + id);
  return await json.json();
};

export const postGroup = async (group) => {
  const json = await fetch(DB_URL + "groups", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(group),
  });
  return await json.json();
};

export const putGroup = async (group, id) => {
  const json = await fetch(DB_URL + "groups/" + id, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(group),
  });
  return await json.json();
};
