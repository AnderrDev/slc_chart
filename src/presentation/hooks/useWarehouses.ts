import { useEffect } from 'react';
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

    return { warehouses, loading, error };
};

export default useWarehouses;
