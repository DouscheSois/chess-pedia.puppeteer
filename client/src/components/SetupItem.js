import React from "react";
import {
  Navbar,
  NavbarBrand,
  Dropdown,
  DropdownButton,
  DropdownItemText,
  DropdownItem,
} from "react-bootstrap";

const SetupItem = ({ item }) => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>{item.title}</Navbar.Brand>
      </Navbar>
      <DropdownButton id="dropdown-item-button" title="Wiki says...">
        <Dropdown.ItemText>{item.summary}</Dropdown.ItemText>
      </DropdownButton>
    </>
  );
};

export default SetupItem;
