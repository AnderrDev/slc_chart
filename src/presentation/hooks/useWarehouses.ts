import { useEffect, useMemo } from 'react';
import { fetchWarehouses } from '../store/slices/warehouseSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks/hooks';
import { RootState } from '../store/store';

const useWarehouses = () => {
    const dispatch = useAppDispatch();
    const warehouses = useAppSelector((state: RootState) => state.warehouses.data);
    const loading = useAppSelector((state: RootState) => state.warehouses.loading);
    const error = useAppSelector((state: RootState) => state.warehouses.error);

    useEffect(() => {
        if (warehouses.length === 0) {
            dispatch(fetchWarehouses());
        }
    }, [dispatch, warehouses.length]);

    const hasWarehouses = useMemo(() => warehouses.length > 0, [warehouses]);

    return { warehouses, loading, error, hasWarehouses };
};

export default useWarehouses;
