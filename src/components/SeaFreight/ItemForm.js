import React from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import EndPoints from "../../EndPoints";

export default function ItemForm({ setResults, setShowSummary, setInputData, inputData }) {
  const initialValues = Object.keys(inputData).length
    ? inputData
    : {
        length: "",
        width: "",
        height: "",
        weight: "",
        quantity: "",
      };

  const validationSchema = Yup.object().shape({
    length: Yup.number().required("Length is required").positive("Must be > 0"),
    width: Yup.number().required("Width is required").positive("Must be > 0"),
    height: Yup.number().required("Height is required").positive("Must be > 0"),
    weight: Yup.number().required("Weight is required").positive("Must be > 0"),
    quantity: Yup.number().required("Quantity is required").positive("Must be > 0"),
  });

  const handleSubmit = async (values) => {
    try {
      setInputData(values);
      const response = await EndPoints.list(values, "optimize-load");
      const {
        totalCBM,
        totalWeight,
        itemsFit,
        suggestContainer,
        stacking,
        weightLimit,
      } = response.data;

      setResults({
        totalCBM,
        totalWeight,
        itemsFit,
        suggestContainer,
        stacking,
        weightLimit,
      });
      setShowSummary(false); 
    } catch (error) {
      console.error("API Error:", error);
      alert("Failed to fetch calculation. Please try again.");
    }
  };

  return (
    <Card className="p-4 shadow-sm border-0">
      <h4 className="fw-bold mb-4 text-success">Item Details</h4>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <FormikForm>
            <Form.Group className="mb-3">
              <Form.Label>Enter Dimensions (L × W × H)</Form.Label>
              <Row>
                <Col>
                  <Field
                    name="length"
                    as={Form.Control}
                    type="number"
                    placeholder="Length (cm)"
                  />
                  <ErrorMessage
                    name="length"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </Col>
                <Col>
                  <Field
                    name="width"
                    as={Form.Control}
                    type="number"
                    placeholder="Width (cm)"
                  />
                  <ErrorMessage
                    name="width"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </Col>
                <Col>
                  <Field
                    name="height"
                    as={Form.Control}
                    type="number"
                    placeholder="Height (cm)"
                  />
                  <ErrorMessage
                    name="height"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </Col>
              </Row>
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Weight per Item (kg)</Form.Label>
                  <Field
                    name="weight"
                    as={Form.Control}
                    type="number"
                    placeholder="Weight"
                  />
                  <ErrorMessage
                    name="weight"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Quantity</Form.Label>
                  <Field
                    name="quantity"
                    as={Form.Control}
                    type="number"
                    placeholder="Quantity"
                  />
                  <ErrorMessage
                    name="quantity"
                    component="div"
                    className="text-danger small mt-1"
                  />
                </Form.Group>
              </Col>
            </Row>

            <div className="text-center d-flex justify-content-center gap-3 mt-3">
              <Button
                variant="success"
                className="px-5 py-2 rounded-pill"
                type="submit"
              >
                Calculate
              </Button>
            </div>
          </FormikForm>
        )}
      </Formik>
    </Card>
  );
}
