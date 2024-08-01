import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { fetchMonthlyDiff } from '../store/slices/monthlyDifferenceSlice';
import { RootState } from '../store/store';
import { MonthlyDifference } from '../../domain/models/MonthlyDifference';

const useMonthlyDiff = (warehouseCode: string, month: number) => {
    const dispatch = useAppDispatch();
    const { data, loading, error, cache } = useAppSelector((state: RootState) => state.monthlyDifferences);
    const [localData, setLocalData] = useState<MonthlyDifference[]>([]);

    useEffect(() => {
        const cacheKey = `${warehouseCode}_${month}`;
        if (cache[cacheKey]) {
            // Si los datos están en la caché, los usamos directamente
            setLocalData(cache[cacheKey]);
        } else if (warehouseCode && month > 0) {
            dispatch(fetchMonthlyDiff({ warehouseCode, month }));
        }
    }, [dispatch, warehouseCode, month, cache]);

    useEffect(() => {
        const cacheKey = `${warehouseCode}_${month}`;
        if (data.length > 0 && !cache[cacheKey]) {
            setLocalData(data);
        }
    }, [data, warehouseCode, month, cache]);

    return { differences: localData, loading, error };
};

export default useMonthlyDiff;
