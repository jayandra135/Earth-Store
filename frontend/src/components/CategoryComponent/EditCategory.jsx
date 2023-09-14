import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { editCategory, getSingleCategory } from "../../redux/category/Actions";
//import axios from "axios";

const EditCategory = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleCategory(id));
  }, [id]);
  const category = useSelector((state) => state.category.category.data);
  console.log(category);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h3>Edit Category</h3>
            <Formik
              enableReinitialize={true}
              initialValues={{
                name: category?.name,

                image: category?.image,
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

                setTimeout(() => {
                  dispatch(editCategory(id, formData)).then(() => {
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
                    placeholder="name"
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
    </Container>
  );
};

export default EditCategory;
