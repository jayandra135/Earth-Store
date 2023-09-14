import React, { useRef } from "react";
import { Formik } from "formik";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addSubCategory } from "../../redux/subCategory/Actions";
import "./style.css";

const AddSubCat = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categorydata = useSelector((state) => state.category.categories);
  console.log(categorydata);

  const imageRef = useRef(null);
  return (
    <>
      <div>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-4 m-4">
              <h4>Add SubCategory</h4>

              <Formik
                initialValues={{
                  category: "",
                  name: "",
                  image: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.category) {
                    errors.category = "category is required";
                  }
                  if (!values.name) {
                    errors.name = "name is required";
                  }
                  if (!values.image) {
                    errors.image = "image is required";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const formData = new FormData();
                  formData.append("category", values.category);
                  formData.append("name", values.name);
                  formData.append("image", values.image);
                  console.log(values.image);
                  setTimeout(() => {
                    dispatch(addSubCategory(formData)).then(() => {
                      navigate("/subcategorylist");
                    });
                    setSubmitting(false);
                  }, 400);
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div className="formdiv">
                      <label>Category</label>
                      <select
                        as="select"
                        name="category"
                        className="form-control "
                        onChange={handleChange}
                      >
                        {categorydata.data &&
                          categorydata.data.map((ele, index) => {
                            return (
                              <>
                                <option key={index} value={ele._id}>
                                  {ele.name}
                                </option>
                              </>
                            );
                          })}
                      </select>
                    </div>
                    {errors.category && touched.category && errors.category}
                    {/*  <div className="formdiv">
                      <label>Category</label>
                      <input
                        type="text"
                        name="category"
                        placeholder="categoryID"
                        className="form-control mt-2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                      />
                     
                    </div> */}
                    <div className="formdiv">
                      <label>Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control mt-2"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                    </div>
                    {errors.name && touched.name && errors.name}
                    <div className="formdiv">
                      <label>Image</label>
                      <input
                        type="file"
                        name="image"
                        placeholder="image"
                        className="form-control mt-2"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          setFieldValue("image", e.currentTarget.files[0]);
                        }}
                        ref={imageRef}
                      />
                    </div>
                    {errors.image && touched.image && errors.image}
                    <br />
                    <button
                      className="btn btn-primary my-4"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default AddSubCat;
