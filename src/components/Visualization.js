import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";

const Visualization = () => {
  const [view, setView] = useState("grid");
  const [shipmentData, setShipmentData] = useState(null);

  const fetchVisualization = async () => {
    const response = await fetch("/api/visualize-shipment");
    const data = await response.json();
    setShipmentData(data);
  };

  useEffect(() => {
    fetchVisualization();
  }, []);

  const renderGridView = () => {
    return (
      <div className="border p-4 grid gap-2 grid-cols-5">
        {shipmentData?.items.map((item, index) => (
          <div
            key={index}
            className={`p-2 text-white text-sm text-center ${
              item.status === "placed" ? "bg-blue-500" : "bg-red-500"
            }`}
          >
            {item.id}
          </div>
        ))}
      </div>
    );
  };

  const render3DView = () => {
    return (
      <div className="bg-gray-100 text-center text-sm p-10 rounded shadow">
        🧊 3D View Placeholder – Integrate with Three.js / react-three-fiber
      </div>
    );
  };

  return (
    <Container className="my-5">
      <h2 className="mb-4 fw-bold text-center">Sea Freight Load Calculator</h2>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card className="p-4 shadow-sm border-0 mt-4 mt-md-0">
            <h4 className="mb-4 fw-bold text-success">
              Shipment Visualization
            </h4>

            <div className="card border-0">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setView("grid")}
                  className="me-2 btn btn-success btn-sm rounded"
                >
                  Grid View
                </button>
                <button
                  onClick={() => setView("3d")}
                  className="me-2 btn btn-primary btn-sm rounded"
                >
                  3D View
                </button>
                <button onClick={fetchVisualization} className="btn btn-info btn-sm rounded text-white">
                  Refresh
                </button>
              </div>

                 <div className="mb-4">
        🧱 Container: {shipmentData?.containerType || "Loading..."}
      </div>
       {view === "grid" ? renderGridView() : render3DView()}
        <div className="mt-3 text-sm d-flex">
        <strong className="me-2">Legend:</strong> 
         <span
                  onClick={() => setView("3d")}
                  className="badge badge-primary me-2"
                >
                  Placed
                </span>

                 <span
                  onClick={() => setView("3d")}
                  className="badge badge-danger me-2 bg-"
                >
                  Not Fit
                </span>
                 <span
                  onClick={() => setView("3d")}
                  className="badge badge-secondary"
                >
                 Occupied
                </span>
      </div>

            </div>
          </Card>
        </Col>

        {/* Export PDF  */}
          <Col md={7}>
           <Card className="p-4 shadow-sm border-0 result-card mt-4 mt-md-0">
              <h4 className="fw-bold mb-4">Export Loading Plan</h4>
              <h5>Summary:</h5>
              <div className="mb-3 fs-5">
                <strong>Container Type:</strong> 20ft Standard
              </div>
              <div className="mb-3 fs-5">
                <strong>Total CBM:</strong> 1.08 m³
              </div>
              <div className="mb-3 fs-5">
                <strong>Total Weight:</strong> 18 kg
              </div>
              <div className="mb-3 fs-5">
                <strong>Utilization</strong> 85% 
              </div>

            <div className="mb-3 fs-5">
                <strong> 1 Item:</strong> 120×30×9 cm
              </div>

               

              <div className="text-center mt-4">
                <button className="btn btn-success w-40 px-5 py-2 rounded-pill">
                  Export as PDF
                </button>
              </div>
            </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default Visualization;
