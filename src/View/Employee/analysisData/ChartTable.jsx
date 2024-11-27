import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardCharts = () => {
  // Sample Data for the 3 charts

  // Top Food Items Data
  const foodItems = [
    { name: 'Apple', quantity: 20 },
    { name: 'Banana', quantity: 15 },
    { name: 'Orange', quantity: 25 },
    { name: 'Grapes', quantity: 30 },
    { name: 'Mango', quantity: 10 },
  ];

  // Top Hospitals Data
  const hospitals = [
    { name: 'Hospital A', patients: 120 },
    { name: 'Hospital B', patients: 90 },
    { name: 'Hospital C', patients: 150 },
  ];

  // Top Categories Data
  const categories = [
    { name: 'Category 1', items: 80 },
    { name: 'Category 2', items: 120 },
    { name: 'Category 3', items: 60 },
  ];

  // Chart Data for Food Items
  const foodChartData = {
    labels: foodItems.map(item => item.name),
    datasets: [
      {
        label: 'Food Items Quantity',
        data: foodItems.map(item => item.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart Data for Hospitals
  const hospitalChartData = {
    labels: hospitals.map(item => item.name),
    datasets: [
      {
        label: 'Number of Patients',
        data: hospitals.map(item => item.patients),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart Data for Categories
  const categoryChartData = {
    labels: categories.map(item => item.name),
    datasets: [
      {
        label: 'Number of Items',
        data: categories.map(item => item.items),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart Options (common for all charts)
  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Top Items, Hospitals, and Categories',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Container className="mt-5">
      <h2 className='sub-title'>Dashboard Charts</h2>

      {/* Row containing 3 charts */}
      <Row className="g-4">
        {/* Chart 1 - Top Food Items */}
        <Col md={4}>
          <Bar data={foodChartData} options={chartOptions} />
        </Col>

        {/* Chart 2 - Top Hospitals */}
        <Col md={4}>
          <Bar data={hospitalChartData} options={chartOptions} />
        </Col>

        {/* Chart 3 - Top Categories */}
        <Col md={4}>
          <Bar data={categoryChartData} options={chartOptions} />
        </Col>
      </Row>
    </Container>
  );
};

export default DashboardCharts;
