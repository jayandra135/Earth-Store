import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import { Container, Row, Col, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import {
  editSubCategory,
  getSingleSubCategory,
} from "../../redux/subCategory/Actions";
//import axios from "axios";

const EditSubCat = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleSubCategory(id));
  }, [id]);
  const subcategory = useSelector(
    (state) => state.subCategory.subcategory.data
  );
  console.log(subcategory);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="m-4 p-4">
            <h3>Edit SubCategory</h3>
            <Formik
              enableReinitialize={true}
              initialValues={{
                category: subcategory?.category.name,
                name: subcategory?.name,

                image: subcategory?.image,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.category) {
                  errors.category = "catgeoryID is required";
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

                setTimeout(() => {
                  dispatch(editSubCategory(id, formData)).then(() => {
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
                  <input
                    type="text"
                    name="category"
                    placeholder="categoryID"
                    className="form-control mt-2"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                    disabled
                  />
                  {errors.category && touched.category && errors.category}
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

export default EditSubCat;
