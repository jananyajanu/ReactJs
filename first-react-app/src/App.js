import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponent from "./components/FunctionComponent";
import { useState } from "react";

function App() {
  const author = "rk";
  const [name, setName] = useState("DI");
  return (
    <div className="App">
      <p>Class Component</p>
      <ClassComponent />

      <p>Function Component</p>
      {/* <FunctionComponent name={"Devtown"} age={20} author={author} /> */}
      <FunctionComponent
        name={name}
        age={20}
        author={author}
        setName={setName}
      />
    </div>
  );
}

export default App;
