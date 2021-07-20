import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../src/redux-duck/tasksDuck";
import List from "../src/components/list";

import { useEffect } from "react";
import "./App.css";
import Input from "./components/input";

function App() {
  const tasks = useSelector((store) => store.tasks.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TASK FRONT APP</p>
        <Input />
        <List />
      </header>
    </div>
  );
}

export default App;
