import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { fetchTodayDiff } from '../store/slices/todayDifferenceSlice';
import { RootState } from '../store/store';

const useTodayDiff = () => {
    const dispatch = useAppDispatch();
    const differences = useAppSelector((state: RootState) => state.todayDifferences.data);
    const loading = useAppSelector((state: RootState) => state.todayDifferences.loading);
    const error = useAppSelector((state: RootState) => state.todayDifferences.error);

    useEffect(() => {
        if (differences.length === 0) {
            dispatch(fetchTodayDiff());
        }
    }, [dispatch, differences.length]);

    const hasDifferences = useMemo(() => differences.length > 0, [differences]);

    return { differences, loading, error, hasDifferences };
};

export default useTodayDiff;
