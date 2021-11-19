import React from "react";
import { Container, Item } from "./Style";
import { Link, NavLink } from "react-router-dom";

const isActive = ({ isActive }) => {
  return {
    color: isActive ? "yellow" : "black",
  };
};
export const Navbar = () => {
  return (
    <Container>
      <Item>
        <NavLink style={isActive} to="/home">
          HOme
        </NavLink>
      </Item>
      <Item>
        <Link to="/about">About</Link>
      </Item>
      <Item>
        <Link to="/contact">Contact</Link>
      </Item>
    </Container>
  );
};
