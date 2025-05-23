import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Card } from 'react-bootstrap';
import { useRef } from 'react';

export default function ExportPDF({ inputData, results }) {
  const cardRef = useRef();

  const generatePDF = () => {
    const input = cardRef.current;
    const elementsToHide = input.querySelectorAll('.no-print');
    elementsToHide.forEach(el => el.style.display = 'none');

    const originalBackground = input.style.backgroundColor;
    input.style.backgroundColor = '#ffffff';

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      input.style.backgroundColor = originalBackground;

      elementsToHide.forEach(el => el.style.display = '');

      const blob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      window.open(blobUrl, '_blank');
    });
  };

  return (
    <div>
      <div ref={cardRef}>
        <Card className="p-4 shadow-sm border-0 bg-white">
          <h4 className="fw-bold mb-4 text-success">Export Loading Plan</h4>

          <div className="mb-3 fs-5">
            <strong>1 Item:</strong> {inputData.length}×{inputData.width}×{inputData.height} cm
          </div>
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

          <div className="text-center mt-4 no-print">
            <button className="btn btn-success px-4 py-2 rounded-pill" onClick={generatePDF}>
              Export PDF
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
