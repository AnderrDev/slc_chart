// /src/presentation/components/DifferencesTable/DifferencesTable.tsx
import React from 'react';
import { TodayDifference } from '../../../../domain/models/TodayDifference';

interface DailyDifferencesTableProps {
    differences: TodayDifference[];
}

const DailyDifferencesTable: React.FC<DailyDifferencesTableProps> = ({ differences }) => (
    <table>
        <thead>
            <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Cantidad Clerk</th>
                <th>Cantidad SAP</th>
                <th>Diferencias</th>
            </tr>
        </thead>
        <tbody>
            {differences.map((difference) => (
                <tr key={difference.whcode}>
                    <td>{difference.whcode}</td>
                    <td>{difference.whname}</td>
                    <td>{difference.qty_clerk}</td>
                    <td>{difference.qty_sap}</td>
                    <td>{difference.diferencias}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default DailyDifferencesTable;
