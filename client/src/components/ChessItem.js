import { React } from "react";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";

const ChessItem = ({ item }) => {
  const baseURL = `https://en.wikipedia.org/wiki/Chess#${item}`;

  return (
    <Navbar bg="light">
      <Navbar.Brand href={baseURL}>{item}</Navbar.Brand>
    </Navbar>
  );
};

export default ChessItem;
