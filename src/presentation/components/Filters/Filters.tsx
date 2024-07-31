// /src/presentation/components/Filters/Filters.tsx
import React from 'react';
import { Month } from '../../../domain/models/Month';

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
}) => (
    <div>
        <label>
            Kiosco:
            <select value={selectedWarehouse} onChange={onWarehouseChange}>
                {warehouses.map((warehouse) => (
                    <option key={warehouse.whcode} value={warehouse.whcode}>
                        {warehouse.whcode}
                    </option>
                ))}
            </select>
        </label>
        <label>
            Mes:
            <select value={selectedMonth} onChange={onMonthChange}>
                {months.map((month) => (
                    <option key={month.number} value={month.number}>
                        {month.name}
                    </option>
                ))}
            </select>
        </label>
    </div>
);

export default Filters;
