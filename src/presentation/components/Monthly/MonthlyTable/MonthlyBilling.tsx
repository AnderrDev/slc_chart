// /src/presentation/pages/MonthlyBilling.tsx
import React from 'react';
import useMonthlyDiff from '../../../hooks/useMonthlyDiff';
import useFilters from '../../../hooks/useFilters';
import Filters from '../../Filters/Filters';
import MonthlyDifferenceTable from '../MonthlyDifferenceTable/MonthlyDifferenceTable';
import MonthlyTransactionsChart from '../MonthlyCharts/MonthlyTransactionsChart';
import MonthlyDifferencesChart from '../MonthlyCharts/MonthlyDifferencesChart';

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

    return (
        <div className="container">
            <h1 className="my-4">Facturación por mes</h1>
            <Filters
                warehouses={warehouses}
                selectedWarehouse={warehouseCode}
                onWarehouseChange={(e) => handleWarehouseChange(e.target.value)}
                months={months}
                selectedMonth={selectedMonth ? selectedMonth.number : 0}
                onMonthChange={(e) => handleMonthChange(Number(e.target.value))}
            />
            {warehousesLoading && <p>Loading warehouses...</p>}
            {warehousesError && <p>{warehousesError.message}</p>}
            {differencesLoading && <p>Loading differences...</p>}
            {differencesError && <p>{differencesError.message}</p>}
            {differences.length > 0 ? (
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
