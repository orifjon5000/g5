import React from "react";
import { createPath } from "history";
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Contact from "./components/Contact";
import { Navbar } from "./components/Navbar";
// import Index from "./components/Buyurtmalar/";
// import Mahsulotlar from "./components/Masulotlar/Index";

const App = () => {
  return (
    // <div>
    //   <Mahsulotlar />
    //   <Index />
    // </div>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h2>404</h2>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;

// <div> ss</div>   this.props.children
// <div name="sss" />  bunde div yoniga uzgaruvchi  this.props.name
