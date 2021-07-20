import React, { useState } from "react";
import { postTask } from "../redux-duck/tasksDuck";
import { useDispatch, useSelector } from "react-redux";

function Input() {
  const dispatch = useDispatch();

  const [value, setValue] = useState({});


  return (
    <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} required />
      <button onClick={() => dispatch(postTask(value))}>ADD</button>
    </div>
  );
}
export default Input;
