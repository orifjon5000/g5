import React from "react";
import { Container, Item } from "./Style";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <Container>
      <Item>
        <Link to="/home">HOme</Link>
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
