import React, { useState } from "react";
import { useDispatch } from "react-redux";
import project1 from "../../data";
import dayjs from "dayjs";
import icon_user from "../../assets/images/user.svg";
import icon_calendar from "../../assets/images/calendar.svg";
import "./TaskDetails.css";

const TaskDetails = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState(project1[0].tasks[0]);
  const [nothing, setNothing] = useState(false);
  const [inputAssignee, setInputAssignee] = useState(false);

  const updateState = () => {
    const existing = task;
    existing.complete = !existing.complete;
    setTask(existing);
    setNothing(!nothing);
  };

  const assigneeInput = () => {
    return (
      <div className="symbol-input">
        <img src={icon_user} alt="assignee" />
        <input
          type="text"
          placeholder="Name or email"
          autoFocus
          onBlur={() => setInputAssignee(false)}
          // onChange={() =>
          //   setSearchQuery(document.getElementById("searching1").value)
          // }
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              setInputAssignee(false);
              // onSeach();
            }
          }}
        />
      </div>
    );
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
          className="btn-symbol"
          onClick={() => dispatch({ type: "DETAILS", details: false })}
        >
          &#8677;
        </button>
      </div>

      <div className="hr"></div>

      <div className="details-container">
        <div className="flex">
          <input type="text" className="input-focus" defaultValue={task.name} />
        </div>

        <table>
          <tbody>
            <tr>
              <td className="txt-gray">Assignee</td>
              {/* <td>{task.assignee}</td> */}
              <td>
                {!inputAssignee ? (
                  <button
                    className="btn-hover flex"
                    onClick={() => setInputAssignee(true)}
                  >
                    <img className="btn-svg" src={icon_user} /> Add assignee
                  </button>
                ) : (
                  assigneeInput()
                )}
              </td>
            </tr>
            <tr>
              <td className="txt-gray">Due date</td>
              <td>
                {/* <p>{dayjs(task.due).format("MMM YYYY")}</p>{" "} */}
                <button className="btn-hover flex">
                  <img className="btn-svg" src={icon_calendar} /> Add due date
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskDetails;
