// /src/presentation/components/Monthly/MonthlyCharts/MonthlyDifferencesChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { MonthlyDifference } from '../../../../domain/models/MonthlyDifference';

interface MonthlyDifferencesChartProps {
  billing: MonthlyDifference[];
}

const MonthlyDifferencesChart: React.FC<MonthlyDifferencesChartProps> = ({ billing }) => {
  const data = {
    labels: billing.slice(0, 10).map((diff) => diff.fecha), // Limita a 10 elementos
    datasets: [
      {
        label: 'Diferencias',
        data: billing.slice(0, 10).map((diff) => diff.diferencias),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite flexibilidad en el tamaño
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div style={{ height: '400px' }}>
      <h2>Diferencias</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MonthlyDifferencesChart;
