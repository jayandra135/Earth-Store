import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
const Customersection = () => {
  return (
    <section className="rowSection">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="customerReiviewsection">
              <h1>What Our Customers Say</h1>

              <div className="customerReview">
                <div className="userreview">
                  <span>
                    <BiSolidQuoteAltLeft />
                  </span>
                  <p>
                    Fast shipping and excellent customer service. The product
                    was even better than expected. I will definitely be a
                    returning customer.
                  </p>
                  <h4>JENNIFER LEWIS</h4>
                </div>
                <div className="userreview">
                  <span>
                    <BiSolidQuoteAltLeft />
                  </span>
                  <p>
                    Great user experience on your website. I found exactly what
                    I was looking for at a great price. I will definitely be
                    telling my friends.
                  </p>
                  <h4>ALICIA HEART</h4>
                </div>
                <div className="userreview">
                  <span>
                    <BiSolidQuoteAltLeft />
                  </span>
                  <p>
                    Thank you for the excellent shopping experience. It arrived
                    quickly and was exactly as described. I will definitely be
                    shopping with you again in the future.
                  </p>
                  <h4>JUAN CARLOS</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Customersection;
