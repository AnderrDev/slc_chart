// /src/hooks/useMonths.ts
import { useState, useEffect } from 'react';
import { Month } from '../../domain/models/Month';

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

export const useMonths = (): Month[] => {
    const [months, setMonths] = useState<Month[]>([]);

    useEffect(() => {
        const currentMonth = new Date().getMonth() + 1;
        const monthsArray = monthNames.slice(0, currentMonth).map((name, index) => ({
            number: index + 1,
            name,
        }));
        setMonths(monthsArray);
    }, []);

    return months;
};
