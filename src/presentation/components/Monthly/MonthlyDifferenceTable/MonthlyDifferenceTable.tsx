// /src/presentation/components/BillingTable/BillingTable.tsx
import React from 'react';
import { MonthlyDifference } from '../../../../domain/models/MonthlyDifference';

interface MonthlyDifferenceTableProps {
    billing: MonthlyDifference[];
}

const MonthlyDifferenceTable: React.FC<MonthlyDifferenceTableProps> = ({ billing }) => (
    <table>
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Cantidad Clerk</th>
                <th>Cantidad SAP</th>
                <th>Diferencias</th>
            </tr>
        </thead>
        <tbody>
            {billing.map((bill) => (
                <tr key={bill.fecha}>
                    <td>{bill.fecha}</td>
                    <td>{bill.qty_clerk}</td>
                    <td>{bill.qty_sap}</td>
                    <td>{bill.diferencias}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default MonthlyDifferenceTable;
