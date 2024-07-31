// /src/presentation/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import warehouseReducer from './slices/warehouseSlice';
import todayDifferenceReducer from './slices/todayDifferenceSlice';
import monthlyDifferenceReducer from './slices/monthlyDifferenceSlice';
import filtersReducer from './slices/filtersSlice';

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        warehouses: warehouseReducer,
        todayDifferences: todayDifferenceReducer,
        monthlyDifferences: monthlyDifferenceReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
