import React from "react";
import { Formik } from "formik";
import { Card, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addUser } from "../../redux/users/Actions";

const Adduser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <div>
        <Row className="justify-content-center">
          <Col md={5}>
            <Card className="p-4 m-4">
              <h1>Add User</h1>

              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                  contact: "",
                  dob: "",
                  gender: "",
                  about: "",
                  status: "",
                  avatar: "",
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.firstName) {
                    errors.firstName = "firstName is required";
                  }
                  if (!values.lastName) {
                    errors.lastName = "lastName is required";
                  }
                  if (!values.email) {
                    errors.email = "Email is required";
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = "Invalid email address";
                  }

                  if (!values.password) {
                    errors.password = "Password is required";
                  }

                  if (!values.contact) {
                    errors.contact = "Contact is required";
                  }
                  if (!values.dob) {
                    errors.dob = "dob is required";
                  }
                  if (!values.gender) {
                    errors.gender = "gender is required";
                  }
                  if (!values.about) {
                    errors.about = "about is required";
                  }
                  if (!values.status) {
                    errors.status = "status is required";
                  }

                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  const formData = new FormData();
                  formData.append("firstName", values.firstName);
                  formData.append("lastName", values.lastName);
                  formData.append("email", values.email);
                  formData.append("password", values.password);
                  formData.append("contact", values.contact);
                  formData.append("dob", values.dob);
                  formData.append("gender", values.gender);
                  formData.append("about", values.about);
                  formData.append("status", values.status);
                  formData.append("avatar", values.avatar);
                  console.log(formData.firstName);
                  setTimeout(() => {
                    dispatch(addUser(formData)).then(() => {
                      navigate("/userlist");
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
                      name="firstName"
                      placeholder="firstName"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    {errors.firstName && touched.firstName && errors.firstName}
                    <input
                      type="text"
                      name="lastName"
                      placeholder="lastName"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    {errors.lastName && touched.lastName && errors.lastName}
                    <input
                      type="email"
                      name="email"
                      placeholder="email"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                    <input
                      type="text"
                      name="contact"
                      placeholder="contact"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.contact}
                    />
                    {errors.contact && touched.contact && errors.contact}
                    <input
                      type="date"
                      name="dob"
                      placeholder="dob"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.dob}
                    />
                    {errors.dob && touched.dob && errors.dob}
                    <input
                      type="text"
                      name="gender"
                      placeholder="gender"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.gender}
                    />
                    {errors.gender && touched.gender && errors.gender}
                    <input
                      type="text"
                      name="about"
                      placeholder="about"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.about}
                    />
                    {errors.about && touched.about && errors.about}
                    <input
                      type="number"
                      name="status"
                      placeholder="status"
                      className="form-control mt-2"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.status}
                    />
                    {errors.status && touched.status && errors.status}
                    <input
                      type="file"
                      name="avatar"
                      placeholder="avatar"
                      className="form-control mt-2"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        setFieldValue("avatar", e.currentTarget.files[0]);
                      }}
                    />
                    {errors.avatar && touched.avatar && errors.avatar}

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

export default Adduser;
