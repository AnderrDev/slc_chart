// /src/presentation/pages/DailyBilling.tsx
import React from 'react';
import DailyDifferencesTable from '../DailyDifferencesTable/DailyDifferenceTable';
import useTodayDiff from '../../../hooks/useTodayDiff';


const DailyTable: React.FC = () => {
    const { differences, loading, error } = useTodayDiff();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div>
            <h1>Facturación del día</h1>
            <DailyDifferencesTable differences={differences} />
        </div>
    );
};

export default DailyTable;
