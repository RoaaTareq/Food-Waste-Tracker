import React from 'react';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';

// Register required chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const WasteFoodDashboard = () => {
  // 1. Waste Trends Over Time (Line Chart)
  const wasteTrendsData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Vegetables',
        data: [100, 150, 90, 120, 130],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
      {
        label: 'Fruits',
        data: [50, 40, 70, 60, 80],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        fill: false,
      },
    ],
  };

  // 2. Category-Wise Waste Distribution (Doughnut Chart)
  const categoryWasteData = {
    labels: ['Vegetables', 'Fruits', 'Dairy', 'Meat'],
    datasets: [
      {
        data: [45, 25, 15, 15],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#4bc0c0'],
      },
    ],
  };

  // 3. Hospital-Specific Waste Comparison (Bar Chart)
  const hospitalWasteData = {
    labels: ['Hospital A', 'Hospital B', 'Hospital C'],
    datasets: [
      {
        label: 'Vegetables',
        data: [100, 80, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Fruits',
        data: [50, 40, 30],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 4. Waste Per Employee (Stacked Bar Chart)
  const employeeWasteData = {
    labels: ['Employee 1', 'Employee 2', 'Employee 3'],
    datasets: [
      {
        label: 'Vegetables',
        data: [30, 50, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Fruits',
        data: [15, 20, 25],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 5. Food Waste vs Inventory (Line Chart)
  const inventoryWasteData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Inventory (kg)',
        data: [200, 180, 220, 210, 230],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        fill: false,
      },
      {
        label: 'Wasted Food (kg)',
        data: [50, 40, 70, 60, 90],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        fill: false,
      },
    ],
  };

  // 6. Cost Analysis of Wasted Food (Bar Chart)
  const costWasteData = {
    labels: ['Vegetables', 'Fruits', 'Dairy', 'Meat'],
    datasets: [
      {
        label: 'Cost of Wasted Food (in USD)',
        data: [500, 300, 200, 400],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h1>Waste Food Analysis Dashboard</h1>

    <div className="d-flex">
    <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>1. Waste Trends Over Time</h2>
        <Line data={wasteTrendsData} options={{ responsive: true }} />
      </div>
      <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>2. Food Waste vs Inventory</h2>
        <Line data={inventoryWasteData} options={{ responsive: true }} />
      </div>

      {/* <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>2. Category-Wise Waste Distribution</h2>
        <Doughnut data={categoryWasteData} options={{ responsive: true }} />
      </div> */}
    </div>

      <div className="d-flex">
      <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>3. Hospital-Specific Waste Comparison</h2>
        <Bar data={hospitalWasteData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
      </div>

      <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>4. Waste Per Employee</h2>
        <Bar data={employeeWasteData} options={{ responsive: true, scales: { y: { beginAtZero: true } }, plugins: { legend: { position: 'top' } } }} />
      </div>
      </div>

      

    <div className='d-flex'>
    <div style={{ width: '500px', margin: '0 auto' }}>
        <h2>6. Cost Analysis of Wasted Food</h2>
        <Bar data={costWasteData} options={{ responsive: true, scales: { y: { beginAtZero: true } } }} />
      </div>

    <div style={{ width: '300px', margin: '0 auto' }}>
        <h2>2. Category-Wise Waste Distribution</h2>
        <Doughnut data={categoryWasteData} options={{ responsive: true }} />
      </div> 
    </div>
    </div>
  );
};

export default WasteFoodDashboard;
