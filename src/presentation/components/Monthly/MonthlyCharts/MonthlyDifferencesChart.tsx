// /src/presentation/components/Monthly/MonthlyCharts/MonthlyDifferencesChart.tsx
import React, { useMemo } from 'react';
import BarChart from '../../Charts/BarChart';
import { MonthlyDifference } from '../../../../domain/models/MonthlyDifference';
interface MonthlyDifferencesChartProps {
  billing: MonthlyDifference[];
}

const MonthlyDifferencesChart: React.FC<MonthlyDifferencesChartProps> = ({ billing }) => {
  const labels = useMemo(() => billing.slice(0, 10).map((diff) => diff.fecha), [billing]);
  const datasets = useMemo(() => [
    {
      label: 'Diferencias',
      data: billing.slice(0, 10).map((diff) => diff.diferencias),
      backgroundColor: 'rgba(255, 99, 132, 0.6)',
    }
  ], [billing]);

  const options = useMemo(() => ({
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  }), []);

  return <BarChart labels={labels} datasets={datasets} title="Diferencias Mensuales" options={options} />;
};

export default MonthlyDifferencesChart;
