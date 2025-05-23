import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
import { Link } from "react-router-dom";

const Shipments = () => {

     const validationSchema = Yup.object().shape({
        title: Yup.string().min(3, "Minimum 3 characters").required("Title is required")
      });
    
      const handleSubmit = async (values) => {
        try {
          console.log("Form Values:", values);
          // const response = await axios.post("/api/login", values);
        } catch (error) {
          console.error("API Error:", error);
        }
      };

  return (
    <>
      <Container className="my-5">
        <h2 className="mb-4 fw-bold text-center">
          Sea Freight Load Calculator
        </h2>
        <Row className="justify-content-center">
          {/* Saved Shipments  */}
          <Col md={5}>
            <Card className="p-4 shadow-sm border-0 result-card mt-4 mt-md-0">
              <h4 className="mb-4 fw-bold text-success">Saved Shipments</h4>

              <div className="card border-0">
                <div className="card-body">
                  <strong className="d-block">June 12 2023</strong>
                  <span className="d-block">1 item: 120×30×9 cm</span>
                  <span className="d-block">0.987 CBM</span>
                  <span className="d-block">20ft Container</span>
                </div>
              </div>
            </Card>
          </Col>

          {/* Save Current Shipment */}
          <Col md={5}>
            <Card className="p-4 shadow-sm border-0">
              <h4 className="mb-4 fw-bold text-success">Save Current Shipment</h4>

    <div className="card mb-3">
                <div className="card-body">
                  <span className="d-block">1 item: 120×30×9 cm</span>
                  <span className="d-block">0.987 CBM</span>
                  <span className="d-block">20ft Container</span>
                </div>
              </div>
              
                 <Formik
                              initialValues={{
                                title: ""
                              }}
                              validationSchema={validationSchema}
                              onSubmit={handleSubmit}
                            >
                              {() => (
                                <FormikForm>
                
                                  <Form.Group className="mb-3">
                                    <Form.Label>Title</Form.Label>
                                    <Field name="title">
                                      {({ field }) => (
                                        <Form.Control type="text" {...field} placeholder="Enter your title" />
                                      )}
                                    </Field>
                                    <div className="text-danger small mt-1">
                                      <ErrorMessage name="title" />
                                    </div>
                                  </Form.Group>
                        
                                  <div className="text-center">
                                    <Link variant="success" to="/visualization" className="w-100 px-5 py-2 rounded-pill">
                                      Save Shipment
                                    </Link>
                                  </div>
                                </FormikForm>
                              )}
                            </Formik>

            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shipments;
