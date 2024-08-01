// /src/components/TodayDifferenceTable.tsx
import React, { useMemo } from 'react';
import { TodayDifference } from '../../../../domain/models/TodayDifference';

interface TodayDifferenceTableProps {
    differences: TodayDifference[];
}

interface TableRowProps {
    difference: TodayDifference;
}

const TableRow: React.FC<TableRowProps> = React.memo(({ difference }) => (
    <tr className={difference.diferencias !== 0 ? 'table-warning' : ''}>
        <td>{difference.whcode}</td>
        <td>{difference.whname}</td>
        <td>{difference.qty_clerk}</td>
        <td>{difference.qty_sap}</td>
        <td>{difference.diferencias}</td>
    </tr>
));

const TodayDifferenceTable: React.FC<TodayDifferenceTableProps> = ({ differences }) => {
    const rows = useMemo(() =>
        differences.map((difference) => <TableRow key={difference.whcode} difference={difference} />),
        [differences]);

    return (
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
                {rows}
            </tbody>
        </table>
    );
};

export default TodayDifferenceTable;
