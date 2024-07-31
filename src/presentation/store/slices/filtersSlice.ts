// /src/store/filtersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Month } from '../../../domain/models/Month';

interface FiltersState {
    warehouseCode: string;
    selectedMonth: Month | null;
}

const initialState: FiltersState = {
    warehouseCode: '',
    selectedMonth: null,
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setWarehouseCode(state, action: PayloadAction<string>) {
            state.warehouseCode = action.payload;
        },
        setSelectedMonth(state, action: PayloadAction<Month>) {
            state.selectedMonth = action.payload;
        },
    },
});

export const { setWarehouseCode, setSelectedMonth } = filtersSlice.actions;
export default filtersSlice.reducer;
