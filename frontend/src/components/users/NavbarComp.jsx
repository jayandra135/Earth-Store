import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { BsFillPersonFill, BsFillBagDashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getAllCart } from "../../redux/cart/Action";

const NavbarComp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCart());
  }, []);
  const cartLength = useSelector((state) => state.cart);
  //console.log(cartLength.cartData);
  return (
    <Navbar expand="lg" className=" navbarSection" sticky="top">
      <Container>
        <Navbar.Brand href="/userhome"> EARTH STORE</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/userhome">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/products">
              Shop
            </NavLink>
            <>
              {cartLength?.cartData?.result ? (
                <NavLink className="nav-link nav-icons" to="/cartview">
                  <BsFillBagDashFill className="carticon" />
                  {cartLength.cartData.result ? (
                    <sup className="cartTotal">
                      {cartLength.cartData?.result}
                    </sup>
                  ) : (
                    ""
                  )}
                </NavLink>
              ) : (
                <NavLink className="nav-link nav-icons" to="#">
                  <BsFillBagDashFill className="carticon" />
                </NavLink>
              )}
            </>

            <NavLink className="nav-link nav-icons" to="/">
              <BsFillPersonFill className="usericon" />
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
