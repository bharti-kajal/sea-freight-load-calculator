import React from "react";
import { Card, Button } from "react-bootstrap";

export default function ContainerSuggestion({ results, setShowSummary }) {
  return (
    <Card className="p-4 shadow-sm border-0 result-card mt-4 mt-md-0">
      <h4 className="fw-bold mb-4">Container Recommendation</h4>

      <img src="../container.PNG" className="mb-2 mx-auto" width={300} alt="Container" />

      <div className="mb-3 fs-5">
        <strong>Suggested Container:</strong> {results.suggestContainer || "-"}
      </div>
      <div className="mb-3 fs-5">
        <strong>Total CBM:</strong> {results.totalCBM} m³
      </div>

      <div className="text-center mt-4">
        <Button className="btn btn-success w-40 px-5 py-2 rounded-pill" onClick={() => setShowSummary(true)}>
          Proceed to Output Summary
        </Button>
      </div>
    </Card>
  );
}
