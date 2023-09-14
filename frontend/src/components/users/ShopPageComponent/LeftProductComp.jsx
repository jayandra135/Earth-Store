import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByName,
  getProductBySubCat,
} from "../../../redux/product/Actions";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import { getSubCategory } from "../../../redux/subCategory/Actions";

const LeftProductComp = () => {
  const dispatch = useDispatch();
  const [input] = useState();
  let debounceTimeout;
  const inputChange = (e) => {
    const query = e.target.value;
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      dispatch(getProductByName(query));
    }, 300);
  };
  // const handleSubmit = () => {
  //   dispatch(getProductByName(input));
  // };
  const buttonHandler = (id) => {
    console.log(id);
    dispatch(getProductBySubCat(id));
  };
  useEffect(() => {
    dispatch(getSubCategory());
  }, []);
  const subCat = useSelector((state) => state.subCategory.subcategories);
  console.log(subCat);

  return (
    <>
      <div className="leftProductSection">
        <section>
          <input
            type="text"
            value={input}
            onChange={inputChange}
            className="form-control "
            placeholder="search name..."
          />
          {/* <Form className="searchForm" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="search product"
                onChange={inputChange}
              />
            </Form.Group>

            <Button variant="contained" color="success" type="submit">
              Success
            </Button>
          </Form> */}
        </section>
        <section>
          <h4>Category</h4>
          {subCat.data &&
            subCat?.data?.map((ele, index) => {
              return (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{ele.categories.name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <p
                      className="subLinks"
                      onClick={() => buttonHandler(ele?._id)}
                    >
                      {ele.name}
                    </p>
                  </AccordionDetails>
                </Accordion>
              );
            })}
        </section>
      </div>
    </>
  );
};

export default LeftProductComp;
