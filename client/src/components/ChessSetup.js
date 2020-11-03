import React from "react";

import { Container } from "react-bootstrap";

import SetupItem from "./SetupItem";

const ChessSetup = ({ info }) => {
  return (
    <Container>
      {info.map((item) => (
        <SetupItem item={item} />
      ))}
    </Container>
  );
};

export default ChessSetup;
