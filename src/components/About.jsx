import React, { useState, useReducer } from "react";
import Buyurtmalar from "./Buyurtmalar/Index";
const About = () => {
  const [x, setX] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case "plus":
        localStorage.setItem("count", state + 1); //localstorage sahifani yangilaganda malumotla saqlanadi
        return state + 1;
      case "doubleplus":
        localStorage.setItem("count", state + x);
        return state + action.paylod.x;
      case "minus":
        localStorage.setItem("count", state - 1);
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(
    reducer,
    parseInt(localStorage.getItem("count")) || 0
  );
  return (
    <div>
      <h1>count reducer:{count}</h1>
      <input
        type="number"
        placeholder="count"
        onChange={(e) => setX(parseInt(e.target.value))}
      />
      <button onClick={() => dispatch({ type: "minus" })}>-</button>{" "}
      <button
        onClick={() => dispatch({ type: "doubleplus", paylod: { x: x } })}
      >
        {x}
      </button>{" "}
      <button onClick={() => dispatch({ type: "minus" })}>-</button>{" "}
      <Buyurtmalar dispatch={dispatch} />
    </div>
  );
};

export default About;
