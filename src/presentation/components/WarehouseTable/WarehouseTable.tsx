// /src/presentation/components/WarehouseTable/WarehouseTable.tsx
import React from 'react';
import { Warehouse } from '../../../domain/models/Warehouse';

interface WarehouseTableProps {
    warehouses: Warehouse[];
}

const WarehouseTable: React.FC<WarehouseTableProps> = ({ warehouses }) => (
    <table>
        <thead>
            <tr>
                <th>WH Code</th>
                <th>WH Name</th>
            </tr>
        </thead>
        <tbody>
            {warehouses.map((warehouse) => (
                <tr key={warehouse.whcode}>
                    <td>{warehouse.whcode}</td>
                    <td>{warehouse.whname}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default WarehouseTable;
