import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footnote = () => {
  return (
    <footer>
      <Container bg="dark">
        <Row>
          <Col className="text-center py-4 border">
            <h4>©2021 - A douschesois creation</h4>
            <>
              <a className="mx-1" href="https://www.douschesois.com/">
                Portfolio
              </a>
              <a
                className="mx-1"
                href="https://www.linkedin.com/in/roger-alexander-37925619a/"
              >
                Linkedin
              </a>
              <a className="mx-1" href="https://github.com/DouscheSois">
                Github
              </a>
            </>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footnote;
