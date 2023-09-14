import React from "react";
import NavbarComp from "../NavbarComp";
import ProductInfoComp from "./ProductInfoComp";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <>
      <NavbarComp />
      <ProductInfoComp id={id} />
    </>
  );
};

export default ProductDetail;
