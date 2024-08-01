import { useMemo } from 'react';
import { Month } from '../../domain/models/Month';

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const useMonths = (): Month[] => {
    const months = useMemo(() => {
        const currentMonth = new Date().getMonth() + 1;
        return monthNames.slice(0, currentMonth).map((name, index) => ({
            number: index + 1,
            name,
        }));
    }, []);

    return months;
};
