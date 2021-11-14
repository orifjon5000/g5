import React from "react";
import ReactDOM from "react-dom";
// import ReactHooks from "./components/Masulotlar/index.jsx";
import "./index.css";
// import Buyurtmalar from "../src/components/Buyurtmalar/Index";
// import ReactOld from "./components/Masulotlar/Test";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Buyurtmalar /> */}
    {/* <ReactHooks /> */}
    {/* <ReactOld /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// <div> ss</div>   this.props.children
// <div name="sss" />  bunde div yoniga uzgaruvchi  this.props.name
