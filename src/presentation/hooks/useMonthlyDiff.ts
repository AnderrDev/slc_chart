// /src/presentation/hooks/useMonthlyDiff.ts
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { fetchMonthlyDiff } from '../store/slices/monthlyDifferenceSlice';


const useMonthlyDiff = (warehouseCode: string, month: number) => {
    const dispatch = useAppDispatch();
    const differences = useAppSelector((state) => state.monthlyDifferences.data);
    const loading = useAppSelector((state) => state.monthlyDifferences.loading);
    const error = useAppSelector((state) => state.monthlyDifferences.error);

    useEffect(() => {

        if (warehouseCode && month > 0) {
            dispatch(fetchMonthlyDiff({ warehouseCode, month }));
        }
    }, [dispatch, warehouseCode, month]);
    return { differences, loading, error };
};

export default useMonthlyDiff;
