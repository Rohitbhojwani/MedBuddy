import React, { useState } from 'react';
import './style/rewardstyle.css';
import Popup from './Popup';

import B1 from './images/b1.png';
import B2 from './images/b2.png';
import B3 from './images/b3.png';
import B4 from './images/b4.png';
import B5 from './images/b5.png';
const DataMarket = () => {

    const data = [
        {
          id: 1,
          name: 'Dengue',
          reports: [
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
            { tname: ['Hemoglobin', 'Packed Cell Volume (PCV)', 'RBC Count', 'MCV', 'MCH', 'MCHC', 'Red Cell Distribution Width (RDW)' , 'Total Leukocyte Count (TLC)', 'Differential Leucocyte Count (DLC)', 'Segmented Neutrophils', 'Lymphocytes', 'Monocytes', 'Eosinophils', 'Basophils'], data: [10.54, 32, 4.79, 66.9, 22, 32.9, 18.6, 4.3, 4.0, 55.8, 31.08, 12.77, 0.25, 0.1] },
          ],
        },
        {
          id: 2,
          name: 'Cholesterol',
          reports: [
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            { tname: ['Cholesterol, Total', 'Triglycerides', 'HDL Cholesterol', 'LDL Cholesterol, Calculated', 'VLDL  Cholesterol,Calculated'], data: [200.00, 201.00, 61.00, 98.80, 40.20] },
            // Add more reports for Chicken Fox
          ],
          // Add data for other cards
        },
        // Add data for other cards
      ];

  const [showPopup, setShowPopup] = useState(false);
  const [selectedData, setSelectedData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (data) => {
    setSelectedCard(data);
    setSelectedData(data.reports);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className='reward-main-div'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className='rewardmain'>
        <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B1} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Dengue</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 4433</p>
                <p id='reward-para'>Treatments: 3407</p>
            </div>
        </div>

        <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B2} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Chicken Fox</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 432</p>
                <p id='reward-para'>Treatments: 245</p>
            </div>
        </div>

        <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B3} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Flu</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 54617</p>
                <p id='reward-para'>Treatments: 54407</p>
            </div>
        </div>

        <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B4} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Maleria</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 1589</p>
                <p id='reward-para'>Treatments: 1356</p>
            </div>
        </div>

    </div>
    <br></br>
    <br></br>
    <br></br>
    <div className='rewardmain'>
    <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B5} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Cancer</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 433</p>
                <p id='reward-para'>Treatments: 407</p>
            </div>
        </div>
        <div className="card2" onClick={() => handleCardClick(data[1])}>
            <img src={B3} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Cholesterol</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 433</p>
                <p id='reward-para'>Treatments: 407</p>
            </div>
        </div>
        <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B1} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Appendix</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 433</p>
                <p id='reward-para'>Treatments: 407</p>
            </div>
        </div>
        <div className="card2" onClick={() => handleCardClick(data[0])}>
            <img src={B2} style={{ width: '100%' }} />
            <div className="rewanddata-container">
                <h4 id='reward-header'><b>Migration</b></h4>
                <hr></hr>
                <br></br>
                <p id='reward-para'>Reports: 433</p>
                <p id='reward-para'>Treatments: 407</p>
            </div>
        </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    {showPopup && (
        <Popup data={selectedData} onClose={closePopup} />
      )}
    </div>
  );
};

export default DataMarket;
