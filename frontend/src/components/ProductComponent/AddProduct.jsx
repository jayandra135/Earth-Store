import React from "react";
import { Formik } from "formik";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addProduct } from "../../redux/product/Actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Row className="justify-content-center">
          <Col md={6} lg={6} xs={6}>
            <Card className="p-4 m-4">
              <h1>Add Product</h1>

              <Formik
                initialValues={{
                  name: "",
                  category: "",
                  subcategory: "",
                  quantity: "",
                  price: "",
                  shortDescription: "",
                  description: "",
                  thumbnail: "",
                  images: [],
                  status: "",
                }}
                validate={(values) => {
                  const errors = {};
                  if (!values.name) {
                    errors.name = "name is required";
                  }
                  if (!values.category) {
                    errors.category = "category is required";
                  }
                  if (!values.subcategory) {
                    errors.subcategory = "subcategory is required";
                  }
                  if (!values.quantity) {
                    errors.quantity = "quantity is required";
                  }
                  if (!values.price) {
                    errors.price = "price is required";
                  }
                  if (!values.shortDescription) {
                    errors.shortDescription = "shortDescription is required";
                  }
                  if (!values.description) {
                    errors.description = "description is required";
                  }

                  if (!values.status) {
                    errors.status = "status is required";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const formData = new FormData();
                  formData.append("name", values.name);
                  formData.append("category", values.category);
                  formData.append("subcategory", values.subcategory);
                  formData.append("quantity", values.quantity);
                  formData.append("price", values.price);
                  formData.append("shortDescription", values.shortDescription);
                  formData.append("description", values.description);
                  formData.append("thumbnail", values.thumbnail);
                  values.images.forEach((image) => {
                    formData.append("images", image);
                  });

                  console.log(values.thumbnail);

                  formData.append("status", values.status);

                  console.log(values.images);

                  setTimeout(() => {
                    dispatch(addProduct(formData)).then(() => {
                      // navigate("/productlist");
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
                  formikProps,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="name"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                    <input
                      type="text"
                      name="category"
                      placeholder="categoryID"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.category}
                    />
                    {errors.category && touched.category && errors.category}
                    <input
                      type="text"
                      name="subcategory"
                      placeholder="subcategory"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.subcategory}
                    />
                    {errors.subcategory &&
                      touched.subcategory &&
                      errors.subcategory}

                    <input
                      type="Number"
                      name="quantity"
                      placeholder="quantity"
                      className="form-control mt-2"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.quantity}
                    />
                    {errors.quantity && touched.quantity && errors.quantity}
                    <input
                      type="Number"
                      name="price"
                      placeholder="price"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                    />
                    {errors.price && touched.price && errors.price}
                    <input
                      type="text"
                      name="shortDescription"
                      placeholder="shortDescription"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.shortDescription}
                    />
                    {errors.shortDescription &&
                      touched.shortDescription &&
                      errors.shortDescription}
                    <input
                      type="text"
                      name="description"
                      placeholder="description"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    {errors.description &&
                      touched.description &&
                      errors.description}

                    <input
                      type="file"
                      name="thumbnail"
                      accept="image/*"
                      placeholder="thumbnail"
                      className="form-control mt-2"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        setFieldValue("thumbnail", e.target.files[0]);
                      }}
                    />

                    <input
                      type="file"
                      name="images"
                      multiple
                      placeholder="images"
                      accept="image/*"
                      className="form-control mt-2"
                      onChange={(e) => {
                        const fileArray = Array.from(e.target.files);
                        setFieldValue("images", [
                          ...values.images,
                          ...fileArray,
                        ]);
                      }}
                      onBlur={handleBlur}
                    />

                    <input
                      type="Number"
                      name="status"
                      placeholder="status"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.status}
                    />
                    {errors.status && touched.status && errors.status}

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

export default AddProduct;
