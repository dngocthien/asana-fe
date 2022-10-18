import { DB_URL } from "../constants";

export const postTask = (task) => {
  fetch(DB_URL + "task", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
    .then((res) => res)
    .catch(() => null);
};
