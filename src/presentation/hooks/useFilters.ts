import { useEffect, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { RootState } from '../store/store';
import { useMonths } from './useMonths';
import useWarehouses from './useWarehouses';
import { setSelectedMonth, setWarehouseCode } from '../store/slices/filtersSlice';

const useFilters = () => {
    const dispatch = useAppDispatch();
    const warehouseCode = useAppSelector((state: RootState) => state.filters.warehouseCode);
    const selectedMonth = useAppSelector((state: RootState) => state.filters.selectedMonth);

    const { warehouses, loading: warehousesLoading, error: warehousesError } = useWarehouses();
    const months = useMonths();

    useEffect(() => {
        if (warehouses.length > 0 && !warehouseCode) {
            dispatch(setWarehouseCode(warehouses[0].whcode));
        }
    }, [warehouses, warehouseCode, dispatch]);

    useEffect(() => {
        if (months.length > 0 && !selectedMonth) {
            dispatch(setSelectedMonth(months[months.length - 1]));
        }
    }, [months, selectedMonth, dispatch]);

    const handleWarehouseChange = useCallback((warehouseCode: string) => {
        dispatch(setWarehouseCode(warehouseCode));
    }, [dispatch]);

    const handleMonthChange = useCallback((monthNumber: number) => {
        const monthName = months.find((month) => month.number === monthNumber)?.name || 'Enero';
        dispatch(setSelectedMonth({ number: monthNumber, name: monthName }));
    }, [months, dispatch]);

    const selectedMonthNumber = useMemo(() => selectedMonth ? selectedMonth.number : 0, [selectedMonth]);

    return {
        warehouseCode,
        selectedMonth: selectedMonthNumber,
        warehouses,
        months,
        warehousesLoading,
        warehousesError,
        handleWarehouseChange,
        handleMonthChange,
    };
};

export default useFilters;
