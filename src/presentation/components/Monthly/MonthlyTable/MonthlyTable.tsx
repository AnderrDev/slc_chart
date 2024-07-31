// /src/presentation/pages/MonthlyBilling.tsx
import React from 'react';
import useMonthlyDiff from '../../../hooks/useMonthlyDiff';
import useFilters from '../../../hooks/useFilters';
import Filters from '../../Filters/Filters';
import MonthlyDifferenceTable from '../MonthlyDifferenceTable/MonthlyDifferenceTable';

const MonthlyTable: React.FC = () => {
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

    if (warehousesLoading) return <p>Loading warehouses...</p>;
    if (warehousesError) return <p>{warehousesError.message}</p>;
    if (differencesLoading) return <p>Loading differences...</p>;
    if (differencesError) return <p>{differencesError.message}</p>;

    return (
        <div>
            <h1>Facturación por mes</h1>
            <Filters
                warehouses={warehouses}
                selectedWarehouse={warehouseCode}
                onWarehouseChange={(e) => handleWarehouseChange(e.target.value)}
                months={months}
                selectedMonth={selectedMonth ? selectedMonth.number : 0}
                onMonthChange={(e) => handleMonthChange(Number(e.target.value))}
            />
            {differences.length > 0 ? (
                <MonthlyDifferenceTable billing={differences} />
            ) : (
                <p>No hay datos disponibles para el kiosco seleccionado y el mes especificado.</p>
            )}
        </div>
    );
};

export default MonthlyTable;
