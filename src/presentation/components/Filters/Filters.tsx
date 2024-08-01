// /src/components/Filters.tsx
import React, { useCallback } from 'react';
import { Month } from '../../../domain/models/Month';
import Select from './Select';

interface FilterProps {
    warehouses: { whcode: string }[];
    selectedWarehouse: string;
    onWarehouseChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    months: Month[];
    selectedMonth: number;
    onMonthChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FilterProps> = ({
    warehouses,
    selectedWarehouse,
    onWarehouseChange,
    months,
    selectedMonth,
    onMonthChange,
}) => {
    const warehouseOptions = warehouses.map((warehouse) => ({
        value: warehouse.whcode,
        label: warehouse.whcode,
    }));

    const monthOptions = months.map((month) => ({
        value: month.number,
        label: month.name,
    }));

    const handleWarehouseChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onWarehouseChange(e);
    }, [onWarehouseChange]);

    const handleMonthChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onMonthChange(e);
    }, [onMonthChange]);

    return (
        <div className="row mb-3">
            <Select
                label="Kiosco"
                value={selectedWarehouse}
                onChange={handleWarehouseChange}
                options={warehouseOptions}
            />
            <Select
                label="Mes"
                value={selectedMonth}
                onChange={handleMonthChange}
                options={monthOptions}
            />
        </div>
    );
};

export default Filters;