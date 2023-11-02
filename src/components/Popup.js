import React, { useState } from 'react';
import './style/rewardstyle.css'

const Popup = ({ data, onClose }) => {
  const [selectedReport, setSelectedReport] = useState(null);

  const handleReportClick = (report) => {
    setSelectedReport(report);
  };

  const handleClose = () => {
    setSelectedReport(null);
    onClose();
  };

  return (
    <div className="popup">
      {selectedReport ? (
        <div className="popup-content">
          <h2><b>Report Details</b></h2>
          <div className="report-details">
            <div className="column">
              <h3>Test Name</h3>
              {selectedReport.tname.map((tname, index) => (
                <p id='report-table-para' key={index}>{tname}</p>
                ))}
            </div>
            <div className="column">
              <h3>Results</h3>
              {selectedReport.data.map((data, index) => (
                <p id='report-table-para' key={index}>{data}</p>
                ))}
            </div>
          </div>
          <button id='popupbutton' onClick={handleClose}>Close</button>
        </div>
      ) : (
        <div className="popup-content">
          <h2><b>Reports List</b></h2>
          <ul className="reports-list">
            {data.map((report, index) => (
              <li key={index} onClick={() => handleReportClick(report)}>
                {'Report ' + (index + 1)}
              </li>
            ))}
          </ul>
          <button id='popupbutton' onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Popup;
