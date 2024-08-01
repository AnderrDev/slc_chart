// /src/presentation/pages/DailyBilling.tsx
import React from 'react';
import useTodayDiff from '../../../hooks/useTodayDiff';
import TodayDifferenceTable from '../DailyDifferencesTable/DailyDifferenceTable';
import TodayDifferencesChart from '../TodayCharts/TodayDifferencesChart';
import TodayTransactionsChart from '../TodayCharts/TodayTransactionsChart';


const TodayBilling: React.FC = () => {
    const { differences, loading, error } = useTodayDiff();

    return (
        <div className="container">
            <h1 className="my-4">Facturación del día</h1>
            {loading && <p>Loading differences...</p>}
            {error && <p>{error.message}</p>}
            {differences.length > 0 ? (
                <>
                    <div className="mb-5">
                        <TodayDifferenceTable differences={differences} />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <TodayTransactionsChart billing={differences} />
                        </div>
                        <div className="col-lg-6">
                            <TodayDifferencesChart billing={differences} />
                        </div>
                    </div>
                </>
            ) : (
                <p>No hay datos disponibles para hoy.</p>
            )}
        </div>
    );
};

export default TodayBilling;
