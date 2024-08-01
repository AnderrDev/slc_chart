// /src/presentation/components/Charts/BarChart.tsx
import React, { useMemo } from 'react';
import { Bar } from 'react-chartjs-2';

interface BarChartProps {
    labels: string[];
    datasets: any[];
    title: string;
    options?: any;
}

const BarChart: React.FC<BarChartProps> = ({ labels, datasets, title, options }) => {
    const data = useMemo(() => ({
        labels,
        datasets,
    }), [labels, datasets]);

    const defaultOptions = useMemo(() => ({
        responsive: true,
        maintainAspectRatio: false,
        ...options,
    }), [options]);

    return (
        <div className="chart-container mb-4">
            <h2>{title}</h2>
            <div style={{ height: '400px' }}>
                <Bar data={data} options={defaultOptions} />
            </div>
        </div>
    );
};

export default BarChart;
