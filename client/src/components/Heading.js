import { Navbar, Nav, Container } from "react-bootstrap";

const Heading = () => {
  return (
    <Navbar sticky="top" bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Chesspedia</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Heading;
