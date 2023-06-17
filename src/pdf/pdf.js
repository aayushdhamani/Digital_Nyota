import React from 'react';
import './pdf.css';
import LocalPdf from './pdf1.pdf';
import LocalPdf2 from './pdf2.pdf';
import LocalPdf3 from './pdf3.pdf';
import LocalPdf4 from './pdf4.pdf';
import LocalPdf5 from './pdf5.pdf';

const Pdf = () => {
  return (
    <div className="page page16">

    <div className="pdf-container">
      <div className="pdf-pages container">
        <div className="pdf-page col-sm-6 col-md-4 col-lg-3 p-5">
          <iframe src={LocalPdf}  title="PDF Viewer" className="pdf-iframe"></iframe>
        </div>
        <div className="pdf-page col-sm-6 col-md-4 col-lg-3 p-5" >
          <iframe src={LocalPdf2} title="PDF Viewer" className="pdf-iframe"></iframe>
        </div>
        <div className="pdf-page col-sm-6 col-md-4 col-lg-3 p-5">
          <iframe src={LocalPdf3} title="PDF Viewer" className="pdf-iframe"></iframe>
        </div>
        <div className="pdf-page col-sm-6 col-md-4 col-lg-3 p-5">
          <iframe src={LocalPdf4} title="PDF Viewer" className="pdf-iframe"></iframe>
        </div>
        <div className="pdf-page col-sm-6 col-md-4 col-lg-3 p-5">
          <iframe src={LocalPdf5} title="PDF Viewer" className="pdf-iframe"></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Pdf;
