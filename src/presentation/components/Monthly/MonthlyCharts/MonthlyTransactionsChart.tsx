// /src/presentation/components/Monthly/MonthlyCharts/MonthlyTransactionsChart.tsx
import React, { useMemo } from 'react';
import BarChart from '../../Charts/BarChart';
import { MonthlyDifference } from '../../../../domain/models/MonthlyDifference';
import '../../../../chartConfig'; // Asegúrate de importar la configuración de Chart.js

interface MonthlyTransactionsChartProps {
    billing: MonthlyDifference[];
}

const MonthlyTransactionsChart: React.FC<MonthlyTransactionsChartProps> = ({ billing }) => {
    const labels = useMemo(() => billing.map(difference => difference.fecha), [billing]);
    const datasets = useMemo(() => [
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
    ], [billing]);

    return <BarChart labels={labels} datasets={datasets} title="Transacciones Mensuales" />;
};

export default MonthlyTransactionsChart;
