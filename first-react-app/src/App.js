import "./App.css";
import ClassComponent from "./pages/ClassComponent";
import FunctionComponent from "./pages/FunctionComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import BaseHoc from "./hoc/BaseHoc";

function App() {
  const author = "rk";
  const [name, setName] = useState("DI");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseHoc>
            <ClassComponent />
          </BaseHoc>
        }
      />
      <Route
        path="/functional-component"
        element={
          <BaseHoc>
            <FunctionComponent
              name={name}
              age={10}
              author={author}
              setName={setName}
            />
          </BaseHoc>
        }
      />
    </Routes>
  );
}

export default App;
