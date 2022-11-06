import { DB_URL } from "../constants";

export const postTask = (task) => {
  fetch(DB_URL + "tasks", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
    .then((res) => res)
    .catch(() => null);
};

export const putTask = (task, id) => {
  fetch(DB_URL + "tasks/" + id, {
    method: "put",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
    .then((res) => res)
    .catch(() => null);
};
