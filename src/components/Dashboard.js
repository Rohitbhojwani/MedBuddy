import React, { useEffect } from 'react';
import './style/Dashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import Chart from 'chart.js/auto';
import { Link } from "react-router-dom";





const Dashboard = () => {

  const pieChartData = {
    labels: ['Reports', 'Scans', 'Formatted Reports'],
    datasets: [
      {
        data: [28, 32, 40],
        backgroundColor: ['#3C303C', '#332933', '#282A3A'],
        hoverBackgroundColor: ['#3C303C', '#332933', '#282A3A'],
      },
    ],
  };


  const pieChartOptions = {
    responsive: true,
    // plugins: {
    //   legend: {
    //     position: 'right',
    //   },
    // },
  };

  useEffect(() => {
    const canvas = document.getElementById('lineChart');
    const context = canvas.getContext('2d');
  

    if (window.myLineChart) {
      window.myLineChart.destroy();
    }
  

    window.myLineChart = new Chart(context, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Views',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgba(146,95,146,1)',
            borderCapStyle: 'round',
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });


    let pieChart = null;

    const updatePieChart = () => {
      if (pieChart) {
        pieChart.destroy();
      }

      const pieChartCanvas = document.getElementById('pieChart');
      const pieChartContext = pieChartCanvas.getContext('2d');
      pieChart = new Chart(pieChartContext, {
        type: 'pie',
        data: pieChartData,
        options: pieChartOptions,
      });
    };


    updatePieChart();

    return () => {
      if (pieChart) {
        pieChart.destroy();
      }
    };
  }, [pieChartData]); 
  
  

  return (
    <div className='dashboard-main-div'>
    <div className='dashboard-container'>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <div className='section1'>
        <div className='subsection1'>
          <div className='subbutton'>
            <div className='Namecard'>
              <label id='name'>Name: Michael Starc</label><br></br>
              <label id='age'>Age: 36</label><br></br>
              <label id='number'>Number: 999-221-3123</label><br></br>
              <label id='address'>Address: Near KAC Mall, Sydney</label>
            </div>
            <div className='totalreports'>
              <h2>Total Reports</h2>
              <label id='totalreports'>23</label>
              <p><FontAwesomeIcon icon={faFileLines} /></p>
            </div>
          </div>
          <div className='linechart'>
          <canvas id='lineChart' />
          </div>
        </div>
        <div className='documentupload'>
        <h2>Data Catogories</h2>
        <canvas id='pieChart' />
        </div>
      </div>
      <div className='section2'>
        <div className='piechart'>
          <Link to='/rewards'><h2>Rewards</h2></Link>
        </div>
        <div className='recentlyupload'>
          <Link to='/datamarket'><h2>Data Center</h2></Link>
        </div>
        <div className='contacts'>
        <h2>Contacts</h2>
          <ul>
            <li id='mlist'>Dr. Mahindra<br></br>
            +91 823-231-5621</li>
            <li id='mlist'>Dr. Sarita<br></br>
            +91 762-141-7812</li>
            <li id='mlist'>Mayra Sybley<br></br>
            +91 612-213-6223</li>
            <li id='mlist'>Phipip Nelms<br></br>
            +91 981-643-4652</li>
          </ul>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
  );
};

export default Dashboard;
