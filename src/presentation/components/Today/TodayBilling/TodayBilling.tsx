// /src/presentation/pages/DailyBilling.tsx
import React, { useMemo } from 'react';
import useTodayDiff from '../../../hooks/useTodayDiff';
import TodayDifferenceTable from '../TodayDifferencesTable/TodayDifferenceTable';
import TodayDifferencesChart from '../TodayCharts/TodayDifferencesChart';
import TodayTransactionsChart from '../TodayCharts/TodayTransactionsChart';
import Loading from '../../Common/Loading';
import Error from '../../Common/Error';


const TodayBilling: React.FC = () => {
    const { differences, loading, error } = useTodayDiff();

    const hasData = useMemo(() => differences.length > 0, [differences]);

    return (
        <div className="container">
            <h1 className="my-4">Facturación del día</h1>
            {loading && <Loading message="Loading differences..." />}
            {error && <Error message={error.message} />}
            {hasData ? (
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
