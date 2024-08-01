// /src/presentation/components/Today/TodayCharts/TodayTransactionsChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { TodayDifference } from '../../../../domain/models/TodayDifference';
import '../../../../chartConfig'; // Asegúrate de importar la configuración de Chart.js

interface TodayTransactionsChartProps {
    billing: TodayDifference[];
}

const TodayTransactionsChart: React.FC<TodayTransactionsChartProps> = ({ billing }) => {
    const data = {
        labels: billing.map(difference => difference.whname),
        datasets: [
            {
                label: 'Cantidad Clerk',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75,192,192,0.6)',
                hoverBorderColor: 'rgba(75,192,192,1)',
                data: billing.map(difference => difference.qty_clerk),
            },
            {
                label: 'Cantidad SAP',
                backgroundColor: 'rgba(153,102,255,0.4)',
                borderColor: 'rgba(153,102,255,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(153,102,255,0.6)',
                hoverBorderColor: 'rgba(153,102,255,1)',
                data: billing.map(difference => difference.qty_sap),
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
    };

    return (
        <div className="chart-container mb-4">
            <h2>Transacciones Diarias</h2>
            <div style={{ height: '400px' }}>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default TodayTransactionsChart;
