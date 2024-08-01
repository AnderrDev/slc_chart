// /src/presentation/pages/MonthlyBilling.tsx
import React, { useMemo } from 'react';
import useMonthlyDiff from '../../../hooks/useMonthlyDiff';
import useFilters from '../../../hooks/useFilters';
import Filters from '../../Filters/Filters';
import MonthlyDifferenceTable from '../MonthlyDifferenceTable/MonthlyDifferenceTable';
import MonthlyTransactionsChart from '../MonthlyCharts/MonthlyTransactionsChart';
import MonthlyDifferencesChart from '../MonthlyCharts/MonthlyDifferencesChart';
import Loading from '../../Common/Loading';
import Error from '../../Common/Error';

const MonthlyBilling: React.FC = () => {
    const {
        warehouseCode,
        selectedMonth,
        warehouses,
        months,
        warehousesLoading,
        warehousesError,
        handleWarehouseChange,
        handleMonthChange,
    } = useFilters();

    const { differences, loading: differencesLoading, error: differencesError } = useMonthlyDiff(
        warehouseCode,
        selectedMonth ? selectedMonth.number : 0
    );

    const selectedMonthNumber = selectedMonth ? selectedMonth.number : 0;

    const hasData = useMemo(() => differences.length > 0, [differences]);

    return (
        <div className="container">
            <h1 className="my-4">Facturación por mes</h1>
            <Filters
                warehouses={warehouses}
                selectedWarehouse={warehouseCode}
                onWarehouseChange={(e) => handleWarehouseChange(e.target.value)}
                months={months}
                selectedMonth={selectedMonthNumber}
                onMonthChange={(e) => handleMonthChange(Number(e.target.value))}
            />
            {warehousesLoading && <Loading message="Loading warehouses..." />}
            {warehousesError && <Error message={warehousesError.message} />}
            {differencesLoading && <Loading message="Loading differences..." />}
            {differencesError && <Error message={differencesError.message} />}
            {hasData ? (
                <>
                    <div className="mb-5">
                        <MonthlyDifferenceTable billing={differences} />
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <MonthlyTransactionsChart billing={differences} />
                        </div>
                        <div className="col-lg-6">
                            <MonthlyDifferencesChart billing={differences} />
                        </div>
                    </div>
                </>
            ) : (
                <p>No hay datos disponibles para el kiosco seleccionado y el mes especificado.</p>
            )}
        </div>
    );
};

export default MonthlyBilling;
