// /src/components/MonthlyDifferenceTable.tsx
import React from 'react';
import { MonthlyDifference } from '../../../../domain/models/MonthlyDifference';

interface MonthlyDifferenceTableProps {
    billing: MonthlyDifference[];
}

interface TableRowProps {
    difference: MonthlyDifference;
}

const TableRow: React.FC<TableRowProps> = React.memo(({ difference }) => (
    <tr key={difference.fecha} className={difference.diferencias !== 0 ? 'table-warning' : ''}>
        <td>{difference.fecha}</td>
        <td>{difference.qty_clerk}</td>
        <td>{difference.qty_sap}</td>
        <td>{difference.diferencias}</td>
    </tr>
));

const MonthlyDifferenceTable: React.FC<MonthlyDifferenceTableProps> = ({ billing }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Cantidad Clerk</th>
                <th>Cantidad SAP</th>
                <th>Diferencias</th>
            </tr>
        </thead>
        <tbody>
            {billing.map((difference) => (
                <TableRow key={difference.fecha} difference={difference} />
            ))}
        </tbody>
    </table>
);

export default MonthlyDifferenceTable;
