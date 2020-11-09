import { React } from "react";
import { Navbar, Dropdown, DropdownButton } from "react-bootstrap";

const SetupItem = ({ item }) => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand>{item}</Navbar.Brand>
      </Navbar>
      <DropdownButton id="dropdown-item-button" title="More">
        <Dropdown.ItemText>{item}</Dropdown.ItemText>
      </DropdownButton>
    </>
  );
};

export default SetupItem;
