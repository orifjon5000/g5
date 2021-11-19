import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <button onClick={() => Navigate("/home")}>go to home</button>
      <button onClick={() => Navigate(-1)}>{"<"}</button>
      <button onClick={() => Navigate(1)}>{">"}</button>
      <button onClick={() => Navigate(-2)}>{"<<"}</button>
    </div>
  );
};

export default Contact;
