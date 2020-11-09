import React, { useState, useEffect } from "react";

import ChessSetup from "./components/ChessSetup";
import Heading from "./components/Heading";
import Footnote from "./components/Footnote";

import { Container } from "react-bootstrap";

import "./App.css";

const App = () => {
  const [heading, setHeading] = useState([]);

  useEffect(() => {
    const fetchHeadings = async () => {
      try {
        let res = await fetch("/home");
        let data = await res.json();

        setHeading(data);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchHeadings();
  }, []);

  return (
    <>
      <main className="py-3">
        <Heading />
        <Container className="py-1">
          <ChessSetup info={heading} />
        </Container>
        <Footnote />
      </main>
    </>
  );
};

export default App;
