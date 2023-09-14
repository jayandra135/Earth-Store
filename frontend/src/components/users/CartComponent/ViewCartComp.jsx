import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { CiCircleRemove } from "react-icons/ci";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import {
  getAllCart,
  removeFromCart,
  updateQuantity,
} from "../../../redux/cart/Action";

const ViewCartComp = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartData);
  const updatequantity = (id) => {
    let type = "increment";
    dispatch(updateQuantity(id, type)).then(() => {
      dispatch(getAllCart());
    });
  };

  const deletequantity = (id) => {
    let type = "decrement";
    dispatch(updateQuantity(id, type)).then(() => {
      dispatch(getAllCart());
    });
  };
  console.log(cartData);

  const removeCart = (id) => {
    dispatch(removeFromCart(id)).then(() => {
      dispatch(getAllCart());
    });
  };

  return (
    <>
      <section className="rowtop">
        <Container>
          <Row>
            <Col lg={8} md={8}>
              <Card>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">SubTotal</TableCell>
                        <TableCell align="center">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartData?.data &&
                        cartData?.data?.map((row) => (
                          <TableRow key={row._id}>
                            <TableCell
                              component="th"
                              scope="row"
                              align="center"
                            >
                              <img
                                src={`${cartData?.path}/${row.thumbnail}`}
                                alt=""
                                className="viewcartImg"
                              />
                            </TableCell>
                            <TableCell align="center">{row.name}</TableCell>
                            <TableCell align="center">{row.price}</TableCell>
                            <TableCell align="center">
                              <div className="quantityCol">
                                <span
                                  className="quantityIcons"
                                  onClick={() => deletequantity(row._id)}
                                >
                                  <AiOutlineMinus />
                                </span>
                                <span>{row.quantity}</span>
                                <span
                                  className="quantityIcons"
                                  onClick={() => updatequantity(row._id)}
                                >
                                  <AiOutlinePlus />
                                </span>
                              </div>
                            </TableCell>
                            <TableCell align="center">{row.subtotal}</TableCell>
                            <TableCell align="center">
                              <CiCircleRemove
                                className="removeCartIcon"
                                onClick={() => removeCart(row._id)}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Card>
            </Col>
            <Col lg={4} md={4}>
              <Card>
                <Card.Header>Price Details</Card.Header>
                <Card.Body className="priceDetailBody">
                  <Card.Text>Total Amount</Card.Text>
                  <Card.Text>{cartData?.total}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="primary">Proceed To Checkout</Button>
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ViewCartComp;
