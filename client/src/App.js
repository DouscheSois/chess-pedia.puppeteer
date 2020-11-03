import React from "react";

import ChessSetup from "./components/ChessSetup";

import { Container } from "react-bootstrap";

import "./App.css";

const infoSummary = [
  {
    title: "Chess Setup",
    summary: "Setup is the setup of chess",
  },
  {
    title: "Chess 2",
    summary: "Chess 2 is this one",
  },
];

const App = () => {
  return (
    <main className="py-1">
      <Container>
        <ChessSetup info={infoSummary} />
      </Container>
    </main>
  );
};

export default App;
