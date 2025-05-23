// SeaFreightPage.js
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContainerSuggestion from './ContainerSuggestion'
import OutputSummary from "./OutputSummary";
import ItemForm from "./ItemForm";

export default function SeaFreightPage() {
  const [results, setResults] = useState({
    totalCBM: null,
    suggestContainer: null,
    itemsFit: null,
    stacking: null,
    weightLimit: null
  });
  const [showSummary, setShowSummary] = useState(false);

  return (
    <Container className="my-5">
      <h2 className="mb-4 fw-bold text-center">Sea Freight Load Calculator</h2>
      <Row>
         
        <Col md={6} className="mx-auto">
          <ItemForm setResults={setResults} setShowSummary={setShowSummary} />
        </Col>

        {results.totalCBM !== null && (
          <Col md={5}>
            <ContainerSuggestion results={results} setShowSummary={setShowSummary} />
          </Col>
        )}

        {results.totalCBM !== null && showSummary && (
          <Col md={7} className="mx-auto mt-4">
            <OutputSummary results={results} />
          </Col>
        )}
      </Row>
    </Container>
  );
}
