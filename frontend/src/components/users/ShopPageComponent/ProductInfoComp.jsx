import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../../redux/product/Actions";
import Button from "@mui/material/Button";
import { FaCartPlus } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";

import { addtoCart, getAllCart } from "../../../redux/cart/Action";

const ProductInfoComp = ({ id }) => {
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  //const cartdata = useSelector((state) => state.cart);
  //console.log(cartdata.cartData);
  // const [cartvalue, setCart] = useState(() => {
  //   const localStorageData = localStorage.getItem("cartData");
  //   return localStorageData ? JSON.parse(localStorageData) : [];
  // });

  // console.log(id);
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [id]);
  const detail = useSelector((state) => state.product.product);
  console.log(detail);

  const changeImage = (index) => {
    setImage(index);
  };
  // useEffect(() => {
  //   localStorage.setItem("cartData", JSON.stringify(cartvalue));
  // }, [cartvalue]);
  // const addtoCart = (item) => {
  //   const updateCart = [...cartvalue, item];
  //   setCart(updateCart);
  // };

  const addToCart = (item) => {
    dispatch(addtoCart(item)).then(() => {
      dispatch(getAllCart());
      // localStorage.setItem("cart", JSON.stringify([item]));
    });
  };

  return (
    <>
      <Container>
        <Row className="rowtop">
          <Col lg={5} md={5} sm={6} xm={6}>
            <Card>
              <Card.Body>
                {image === 0 || image ? (
                  <Card.Img
                    src={`${detail?.path}/${detail.data?.images[image]}`}
                  />
                ) : (
                  <Card.Img src={`${detail?.path}/${detail.data?.thumbnail}`} />
                )}
              </Card.Body>
              <Card.Footer className="infocardfooter">
                <Button onClick={() => addToCart(detail.data?._id)}>
                  <FaCartPlus className="footericon" /> Add To Cart
                </Button>
                <Button>
                  <IoMdFlash className="footericon" />
                  Buy Now
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={7} md={7} sm={6} xm={6}>
            <Card className="ProductInfoCard">
              <Card.Body className="infocardbody">
                <Card.Title>{detail.data?.name}</Card.Title>
                <Card.Text>{detail.data?.shortDescription}</Card.Text>
                <Card.Text>
                  Rs.<span className="infoprice">{detail.data?.price}</span>
                </Card.Text>
                <div className="imageGallery">
                  {detail?.data?.images &&
                    detail?.data?.images.map((ele, index) => {
                      return (
                        <img
                          src={`${detail.path}/${ele}`}
                          alt=""
                          className="galleryimg"
                          key={index}
                          onClick={() => changeImage(index)}
                        />
                      );
                    })}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="rowtop">
          <Col lg={12} md={12} sm={6} xm={6}>
            <Card>
              <Card.Body className="descriptionBody">
                <Card.Title>{detail.data?.name}</Card.Title>
                <Card.Text>{detail.data?.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductInfoComp;
