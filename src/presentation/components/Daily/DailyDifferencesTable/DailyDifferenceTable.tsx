// /src/components/TodayDifferenceTable.tsx
import React from 'react';
import { TodayDifference } from '../../../../domain/models/TodayDifference';

interface TodayDifferenceTableProps {
    differences: TodayDifference[];
}

const TodayDifferenceTable: React.FC<TodayDifferenceTableProps> = ({ differences }) => (
    <table className="table table-bordered">
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
                <tr key={difference.whcode} className={difference.diferencias !== 0 ? 'table-warning' : ''}>
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

export default TodayDifferenceTable;
