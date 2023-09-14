import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style.css";
const HeroSection = () => {
  return (
    <section className="hero-section">
      <Row>
        <Col>
          <div className="hero-heading">
            <h1>earth</h1>
            <h4>MultiPurpose Store</h4>
            <Link to="/products">Shop now</Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
