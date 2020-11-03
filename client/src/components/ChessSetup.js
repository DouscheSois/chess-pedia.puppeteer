import React from "react";
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownButton,
  DropdownItemText,
  DropdownItem,
} from "react-bootstrap";

const ChessSetup = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>What is Chess Setup?</Navbar.Brand>
      </Navbar>
      <DropdownButton id="dropdown-item-button" title="Wiki says...">
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
      </DropdownButton>
    </>
  );
};

export default ChessSetup;
