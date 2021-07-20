import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { putTask, deleteTask } from "../redux-duck/tasksDuck";

function List() {
  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.tasks.tasks);

  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.vigent === true ? t.description : <strike>{t.description}</strike>}
          <input
            type="checkbox"
            onClick={() => dispatch(putTask(t))}
            defaultChecked={t.vigent === false ? true : false}
          />
          <button>EDIT</button>{" "}
          <button onClick={() => dispatch(deleteTask(t.id))}>DELETE</button>{" "}
        </li>
      ))}
    </ul>
  );
}

export default List;
