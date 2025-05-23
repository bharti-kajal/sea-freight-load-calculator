import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
import EndPoints from "../EndPoints";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Password is required")
  });
   const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      console.log("Form Values:", values);
       const response = await EndPoints.login(values, "login");
      if (response.data.status && response.data.token) {
        localStorage.setItem("authToken", response.token);
        navigate("/shipments");
      } else {
        toast.error("Login failed");
      }
       
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
                email: "",
                password: ""
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {() => (
                <FormikForm>

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

                  <div className="text-center">
                    <Button variant="success" type="submit" className="w-100 px-5 py-2 rounded-pill">
                      Login
                    </Button>
                  </div>
                </FormikForm>
              )}
            </Formik>

            <div className="justify-content-center d-flex mt-2">
            <span>Don't have an account?
              <Link to="/signup">Signup</Link></span>
            </div>

          </Card>
        </Col>
      </Row>
    </Container>
  );
}
