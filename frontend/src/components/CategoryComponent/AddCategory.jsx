import React from "react";
import { Formik } from "formik";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addCategory } from "../../redux/category/Actions";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-4 m-4">
              <h1>Add Category</h1>

              <Formik
                initialValues={{
                  name: "",
                  image: "",
                }}
                validate={(values) => {
                  const errors = {};

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
                  formData.append("name", values.name);
                  formData.append("image", values.image);
                  // console.log(formData.name);
                  setTimeout(() => {
                    dispatch(addCategory(formData)).then(() => {
                      navigate("/categorylist");
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
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    {errors.name && touched.name && errors.name}

                    <input
                      type="file"
                      name="image"
                      placeholder="image"
                      className="form-control mt-2"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        setFieldValue("image", e.currentTarget.files[0]);
                      }}
                    />
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

export default AddCategory;
