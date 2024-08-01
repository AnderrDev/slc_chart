import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MonthlyDifference } from '../../../domain/models/MonthlyDifference';
import { DifferenceRepositoryImpl } from '../../../data/repositories/DifferenceRepositoryImpl';
import { FetchMonthlyDiff } from '../../../domain/usecases/FetchMonthlyDiff';
import { ApiError } from '../../../domain/models/ApiError';

const differenceRepository = new DifferenceRepositoryImpl();
const fetchMonthlyDiffUseCase = new FetchMonthlyDiff(differenceRepository);

interface FetchMonthlyDiffParams {
    warehouseCode: string;
    month: number;
}

export const fetchMonthlyDiff = createAsyncThunk<MonthlyDifference[], FetchMonthlyDiffParams, { rejectValue: ApiError }>(
    'differences/fetchMonthlyDiff',
    async ({ warehouseCode, month }, { rejectWithValue }) => {
        const result = await fetchMonthlyDiffUseCase.execute(warehouseCode, month);
        if (result._tag === 'Left') {
            return rejectWithValue(result.left);
        }
        return result.right;
    }
);

interface MonthlyDifferenceState {
    data: MonthlyDifference[];
    loading: boolean;
    error: ApiError | null;
    cache: Record<string, MonthlyDifference[]>; // Cache para almacenar datos
}

const initialState: MonthlyDifferenceState = {
    data: [],
    loading: false,
    error: null,
    cache: {}, // Inicializamos la caché
};

const monthlyDifferenceSlice = createSlice({
    name: 'monthlyDifferences',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMonthlyDiff.pending, (state) => {
                state.loading = true;
                state.error = null;  // Clear previous error
            })
            .addCase(fetchMonthlyDiff.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;

                // Almacenamos los datos en la caché usando warehouseCode y month como clave
                const { warehouseCode, month } = action.meta.arg;
                state.cache[`${warehouseCode}_${month}`] = action.payload;
            })
            .addCase(fetchMonthlyDiff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as ApiError;
            });
    },
});

export default monthlyDifferenceSlice.reducer;
