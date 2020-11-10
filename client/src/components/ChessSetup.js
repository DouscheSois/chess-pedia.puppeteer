import React from "react";

import { Container } from "react-bootstrap";

import ChessItem from "./ChessItem";

const ChessSetup = ({ info }) => {
  return (
    <Container>
      {info.map((item, key) => (
        <ChessItem item={item} key={key} />
      ))}
    </Container>
  );
};

export default ChessSetup;
