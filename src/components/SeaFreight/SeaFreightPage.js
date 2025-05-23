import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ItemForm from "./ItemForm";
import ContainerSuggestion from "./ContainerSuggestion";
import OutputSummary from "./OutputSummary";
import ExportPDF from "./ExportPdf";

export default function SeaFreightPage() {
  const [results, setResults] = useState({
    totalCBM: null,
    suggestContainer: null,
    itemsFit: null,
    stacking: null,
    weightLimit: null,
  });

  const [inputData, setInputData] = useState({});
  const [showSummary, setShowSummary] = useState(false);
  

  const handleBack = () => {
    setShowSummary(false);
  };

  const handleProceedToOutput = () => {
    setShowSummary(true);
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 fw-bold text-center">Sea Freight Load Calculator</h2>
      <Row>
       
        {!showSummary && (
          <>
            <Col md={6} className="mx-auto">
              <ItemForm
                setResults={(res) => {
                  setResults(res);
                }}
                setShowSummary={setShowSummary}
                setInputData={setInputData}
                inputData={inputData}
              />
            </Col>

         
            {results.totalCBM !== null && (
              <Col md={6}>
                <ContainerSuggestion
                  results={results}
                  setShowSummary={setShowSummary}
                />
              </Col>
            )}
          </>
        )}

        
        {showSummary && results.totalCBM !== null && (
          <>
            <Col md={6} className="mx-auto mt-4">
              <OutputSummary results={results} />
              <div className="d-flex justify-content-start mt-3">
                <Button variant="secondary" onClick={handleBack}>
                  ← Back to Edit
                </Button>
              </div>
            </Col>

            <Col md={6} className="mt-4">
              <ExportPDF inputData={inputData} results={results} />
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}
