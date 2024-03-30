import React from 'react';
import svgIcon from '../../assets/img/qr-code.svg';
import './style.scss';
const UploadSection = () => {
  return (
    <>
      <div className="container">
        <div className="inner-section">
          <h6>Recent Activity By Students</h6>
          <i>
            Here are All the Student's Recent Activities and Progress Details.
          </i>
        </div>
      </div>
      <div className="container">
        <div className="upload-section">
          <div className="question-upload">
            <span className="upload-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#afafaf"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-upload"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" x2="12" y1="3" y2="15" />
              </svg>
            </span>
            <p>Upload The Question Paper or Drag it here.</p>
            <i>(Supported Formats: PDF Only)</i>
          </div>
          <div className="scan-code">
            <img src={svgIcon} alt="" />
            <div>
              <h6>Scan the QR Code</h6>
              <p>
                Scan this QR code and it will redirect you where you can take a
                picture and upload it Direct as a PDF here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadSection;
