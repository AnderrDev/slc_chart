// /src/presentation/components/Today/TodayCharts/TodayDifferencesChart.tsx
import React, { useMemo } from 'react';
import BarChart from '../../Charts/BarChart';
import { TodayDifference } from '../../../../domain/models/TodayDifference';
import '../../../../chartConfig'; // Asegúrate de importar la configuración de Chart.js

interface TodayDifferencesChartProps {
    billing: TodayDifference[];
}

const TodayDifferencesChart: React.FC<TodayDifferencesChartProps> = ({ billing }) => {
    const labels = useMemo(() => billing.map(difference => difference.whname), [billing]);
    const datasets = useMemo(() => [
        {
            label: 'Diferencias',
            backgroundColor: 'rgba(255,99,132,0.4)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.6)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: billing.map(difference => difference.diferencias),
        }
    ], [billing]);

    return <BarChart labels={labels} datasets={datasets} title="Diferencias Diarias" />;
};

export default TodayDifferencesChart;
