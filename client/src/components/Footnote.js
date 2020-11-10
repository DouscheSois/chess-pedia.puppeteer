import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const Footnote = () => {
  return (
    <Navbar
      sticky="bottom"
      bg="primary"
      variant="dark"
      expand="lg"
      className="py-4"
    >
      <Container>
        <Navbar.Brand>©2021 - A douschesois creation</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="https://www.douschesois.com/">Portfolio</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/roger-alexander-37925619a/">
            Linkedin
          </Nav.Link>
          <Nav.Link href="https://github.com/DouscheSois">Github</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Footnote;
