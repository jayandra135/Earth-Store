import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../style.css";

import CardComp from "./CardComp";
const RightProductComp = () => {
  return (
    <section className="rightproductsection">
      <Container>
        <Row>
          <Col className="prodColumn">
            <CardComp />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RightProductComp;
