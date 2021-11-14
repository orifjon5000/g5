import React, { useEffect, useState } from "react";

const ReactHooks = (props) => {
  const [counter, setCounter] = useState(props.count);
  const [status, setStatus] = useState("student");

  useEffect(() => {
    setCounter(props.count);
  }, [props.count]);
  return (
    <div>
      <h2>React {counter}</h2>
      <h2>React {status}</h2>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <br />
      <input
        type="text"
        value={status}
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      />
    </div>
  );
};
export default ReactHooks;
