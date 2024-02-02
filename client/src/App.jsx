import { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import AddTask from "./components/AddTask/AddTask";

function App() {
  return (
    <>
      <Header></Header>
      <div className="list-wrapper">
        <AddTask></AddTask>
      </div>
    </>
  );
}

export default App;
