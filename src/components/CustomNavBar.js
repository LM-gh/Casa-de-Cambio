import { React, Fragment } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const CustomNavBar = () => {
  return (
    <Fragment>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Exchange rates API</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#about">About</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </Fragment>
  );
};
