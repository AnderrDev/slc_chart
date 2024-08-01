// /src/presentation/components/Today/TodayCharts/TodayDifferencesChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { TodayDifference } from '../../../../domain/models/TodayDifference';
import '../../../../chartConfig'; // Asegúrate de importar la configuración de Chart.js

interface TodayDifferencesChartProps {
    billing: TodayDifference[];
}

const TodayDifferencesChart: React.FC<TodayDifferencesChartProps> = ({ billing }) => {
    const data = {
        labels: billing.map(difference => difference.whname),
        datasets: [
            {
                label: 'Diferencias',
                backgroundColor: 'rgba(255,99,132,0.4)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.6)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: billing.map(difference => difference.diferencias),
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container mb-4">
            <h2>Diferencias Diarias</h2>
            <div style={{ height: '400px' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default TodayDifferencesChart;
