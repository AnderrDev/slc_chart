import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { WarehouseRepositoryImpl } from '../../../data/repositories/WarehouseRepositoryImpl';
import { FetchWarehouses } from '../../../domain/usecases/FetchWarehouses';
import { ApiError } from '../../../domain/models/ApiError';
import { Warehouse } from '../../../domain/models/Warehouse';

const warehouseRepository = new WarehouseRepositoryImpl();
const fetchWarehousesUseCase = new FetchWarehouses(warehouseRepository);

export const fetchWarehouses = createAsyncThunk<Warehouse[], void, { rejectValue: ApiError }>(
    'warehouses/fetchWarehouses',
    async (_, { rejectWithValue }) => {
        const result = await fetchWarehousesUseCase.execute();
        if (result._tag === 'Left') {
            return rejectWithValue(result.left);
        }
        return result.right;
    }
);

interface WarehouseState {
    data: Warehouse[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: WarehouseState = {
    data: [],
    loading: false,
    error: null,
};

const warehouseSlice = createSlice({
    name: 'warehouses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWarehouses.pending, (state) => {
                state.loading = true;
                state.error = null;  // Clear previous error
            })
            .addCase(fetchWarehouses.fulfilled, (state, action: PayloadAction<Warehouse[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchWarehouses.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as ApiError;
            });
    },
});

export default warehouseSlice.reducer;
