import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { fetchTodayDiff } from '../store/slices/todayDifferenceSlice';


const useTodayDiff = () => {
    const dispatch = useAppDispatch();
    const differences = useAppSelector((state) => state.todayDifferences.data);
    const loading = useAppSelector((state) => state.todayDifferences.loading);
    const error = useAppSelector((state) => state.todayDifferences.error);

    useEffect(() => {
        if (differences.length === 0) {
            dispatch(fetchTodayDiff());
        }
    }, [dispatch, differences.length]);

    return { differences, loading, error };
};

export default useTodayDiff;
