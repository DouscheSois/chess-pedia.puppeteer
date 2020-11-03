import React from "react";

import ChessSetup from "./components/ChessSetup";

import { Container } from "react-bootstrap";

import "./App.css";

const infoSummary = [
  {
    title: "Setup",
    summary: "Setup is the setup of chess",
  },
];

const App = () => {
  return (
    <main className="py-1">
      <Container>
        <ChessSetup />
      </Container>
    </main>
  );
};

export default App;
