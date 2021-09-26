import React, { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';

import MOCK_DATA from '../../MOCK_DATA.json';

const Statistics = () => {
  const [showPie, setShowPie] = useState(false);

  const mostExpensive = MOCK_DATA.filter((item) => {
    return item.price >= 180;
  });
  const topFiveNames = mostExpensive.map((item) => {
    return item.name;
  });
  const highPrice = mostExpensive.map((item) => {
    return item.price;
  });
  const topFive = highPrice.slice(0, 5);

  const leastExpensive = MOCK_DATA.filter((item) => {
    return item.price <= 100;
  });

  const lowFive = leastExpensive.slice(0, 5);

  const lowFiveNames = lowFive.map((item) => {
    return item.name;
  });
  const lowPrice = lowFive.map((item) => {
    return item.price;
  });

  const highData = {
    labels: topFiveNames,
    datasets: [
      {
        label: 'Most expensive > 180 €',
        data: topFive,
        backgroundColor: 'rgb(255, 99, 132)',
      },
    ],
  };

  const lowData = {
    labels: lowFiveNames,
    datasets: [
      {
        label: 'Least expensive < 100 €',
        data: lowPrice,
        backgroundColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const manufacturers = MOCK_DATA.map((item) => {
    return item.manufacturer.name;
  });

  const stockItems = MOCK_DATA.map((item) => {
    return item.manufacturer.stock;
  });

  const dataPie = {
    labels: manufacturers,
    datasets: [
      {
        label: 'Stock items',
        data: stockItems,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className='statistics'>
      {showPie ? (
        <div className='pie'>
          <Pie data={dataPie} />
        </div>
      ) : (
        <div className='bar'>
          <Bar data={highData} options={options} />
          <Bar data={lowData} options={options} />
        </div>
      )}
      <button
        onClick={() => {
          setShowPie(!showPie);
        }}
      >
        📊 {!showPie ? 'Show pie' : 'Show bar'}
      </button>
    </div>
  );
};

export default Statistics;
