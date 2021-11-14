import React from "react";

import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

// <div> ss</div>   this.props.children
// <div name="sss" />  bunde div yoniga uzgaruvchi  this.props.name
