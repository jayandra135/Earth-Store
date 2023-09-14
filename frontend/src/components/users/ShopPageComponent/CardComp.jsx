import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductBySubCat, getProduct } from "../../../redux/product/Actions";
const CardComp = () => {
  const id = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
    dispatch(getProductBySubCat(id));
  }, []);

  const productData = useSelector((state) => state.product.products);
  //console.log(productData);
  return (
    <>
      {productData?.data &&
        productData?.data.map((map, index) => {
          return (
            <Card className="productCard" key={index}>
              <Link to={"/productdetails/" + map._id}>
                <Card.Img
                  variant="top"
                  className="productCardImg"
                  src={`${productData.path}/${map.thumbnail}`}
                />
              </Link>

              <Card.Body className="cardBody">
                <Card.Title>{map.name}</Card.Title>
                <h4>{map.shortDescription}</h4>
                <p>rs.{map.price}</p>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default CardComp;
