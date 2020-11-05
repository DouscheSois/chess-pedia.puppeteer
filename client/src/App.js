import React, { useState, useEffect } from "react";

import ChessSetup from "./components/ChessSetup";

import { Container } from "react-bootstrap";

import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

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
    <Provider store={store}>
      <main className="py-1">
        <Container>
          <ChessSetup info={heading} />
        </Container>
      </main>
    </Provider>
  );
};

export default App;
