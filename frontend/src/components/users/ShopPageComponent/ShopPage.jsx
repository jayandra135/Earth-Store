import React from "react";
import NavbarComp from "../NavbarComp";
import { Row, Col, Container } from "react-bootstrap";
import RightProductComp from "./RightProductComp";
import LeftProductComp from "./LeftProductComp";
const ShopPage = () => {
  return (
    <>
      <NavbarComp />
      <Container>
        <Row className="rowtop">
          <Col lg={3} md={3} sm={6} xm={6}>
            <LeftProductComp />
          </Col>
          <Col lg={9} md={9} xm={6} sm={6}>
            <RightProductComp />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ShopPage;
