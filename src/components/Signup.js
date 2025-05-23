import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
import { Link } from "react-router-dom";


export default function Signup() {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSubmit = async (values) => {
    try {
      console.log("Form Values:", values);
      // const response = await axios.post("/api/signup", values);
    } catch (error) {
      console.error("API Error:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col md={5} className="mx-auto">
          <Card className="p-4 shadow-sm border-0">
           <h2 className="mb-4 fw-bold text-center">Sea Freight Load Calculator</h2>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirm_password: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <FormikForm>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Field name="name">
                      {({ field }) => (
                        <Form.Control type="text" {...field} placeholder="Enter your name" />
                      )}
                    </Field>
                    <div className="text-danger small mt-1">
                      <ErrorMessage name="name" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Field name="email">
                      {({ field }) => (
                        <Form.Control type="email" {...field} placeholder="Enter your email" />
                      )}
                    </Field>
                    <div className="text-danger small mt-1">
                      <ErrorMessage name="email" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Field name="password">
                      {({ field }) => (
                        <Form.Control type="password" {...field} placeholder="Enter password" />
                      )}
                    </Field>
                    <div className="text-danger small mt-1">
                      <ErrorMessage name="password" />
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Field name="confirm_password">
                      {({ field }) => (
                        <Form.Control type="password" {...field} placeholder="Confirm password" />
                      )}
                    </Field>
                    <div className="text-danger small mt-1">
                      <ErrorMessage name="confirm_password" />
                    </div>
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="success" type="submit" className="w-100 px-5 py-2 rounded-pill">
                      Signup
                    </Button>
                  </div>
                </FormikForm>
              )}
            </Formik>
            <div className="justify-content-center d-flex mt-2">
            <p>Already have an account? </p>
            <Link to="/login"> Login</Link>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
