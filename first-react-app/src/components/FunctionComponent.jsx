import React, { useState } from "react";
function FunctionComponent({ name, age, author, setName }) {
  const [count, setCount] = useState(0);
  const [changeName, setChangeName] = useState("");
  const reduceCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Function Component</p>
        <button onClick={() => setCount(count + 1)}>
          Click to increment by 1
        </button>
        <button onClick={reduceCount}>Click to decrement by 1</button>
        <h2>{count}</h2>
        <h4>
          My Company is:{name} it is of {age} years old and the author would be{" "}
          {author}
        </h4>
        <input onChange={(e) => setChangeName(e.target.value)} />
        {/* <button onClick={() => props.setName(changeName)}>
          Change name to .
        </button> */}
        <button onClick={() => setName(changeName)}>Change name to .</button>
      </header>
    </div>
  );
}
export default FunctionComponent;
