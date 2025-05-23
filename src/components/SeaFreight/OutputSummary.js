import React from "react";
import { Card } from "react-bootstrap";

export default function OutputSummary({ results }) {

    return (
    <Card className="p-4 shadow-sm border-0">
      <h4 className="fw-bold mb-4 text-success">Output Summary</h4>
      <div className="mb-3 fs-5">
        <strong>Used Container:</strong> {results.suggestContainer || "-"}
      </div>
      <div className="mb-3 fs-5">
        <strong>Total Utilization:</strong> {results.totalCBM} m³
      </div>
      <div className="mb-3 fs-5">
        <strong>Items Fit per Container:</strong> {results.itemsFit}
      </div>
      <div className="mb-3 fs-5">
        <strong>Stacking Rules:</strong> {results.stacking}
      </div>
      <div className="mb-3 fs-5">
        <strong>Weight Limits:</strong> {results.weightLimit}
      </div>
      {/* <div className="text-center mt-4">
        <Link className="btn btn-success w-40 px-5 py-2 rounded-pill" to="/login">
          Login
        </Link>
      </div> */}
    </Card>
  );
}