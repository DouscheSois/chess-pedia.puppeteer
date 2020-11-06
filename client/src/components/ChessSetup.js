import React from "react";

import { Container } from "react-bootstrap";

import SetupItem from "./SetupItem";

const ChessSetup = ({ info }) => {
  return (
    <Container>
      {info.map((item, key) => (
        <SetupItem item={item} key={key} />
      ))}
    </Container>
  );
};

export default ChessSetup;
