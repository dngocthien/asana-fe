import React, { useState } from "react";
import { useDispatch } from "react-redux";
import project1 from "../../data";
import dayjs from "dayjs";
import "./TaskDetails.css";

const TaskDetails = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(project1[0].tasks[0]);
  const [nothing, setNothing] = useState(false);

  const updateState = () => {
    const existing = task;
    existing.complete = !existing.complete;
    setTask(existing);
    setNothing(!nothing);
  };
  return (
    <div className="details">
      <div className="details-header space-between">
        {/* btn:complete */}
        <button
          className={task.complete ? "btn-border-green" : "btn-border"}
          onClick={() => updateState()}
        >
          &#10003; complete
        </button>

        {/* btn:close_details */}
        <button
          className="btn-hover"
          onClick={() => dispatch({ type: "DETAILS", details: false })}
        >
          &#8677;
        </button>
      </div>

      <div className="hr"></div>

      <div className="details-container">
        <div className="flex">
          <input
            type="text"
            className="details-name"
            defaultValue={task.name}
          />
        </div>
        <table>
          <tbody>
            <tr>
              <td className="txt-gray">Assignee</td>
              <td>{task.assignee}</td>
            </tr>
            <tr>
              <td className="txt-gray">Due date</td>
              <td>{dayjs(task.due).format("MMM YYYY")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskDetails;
