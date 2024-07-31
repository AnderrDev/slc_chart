import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { MonthlyDifference } from '../../../domain/models/MonthlyDifference';
import { DifferenceRepositoryImpl } from '../../../data/repositories/DifferenceRepositoryImpl';
import { FetchMonthlyDiff } from '../../../domain/usecases/FetchMonthlyDiff';
import { ApiError } from '../../../domain/models/ApiError';

const differenceRepository = new DifferenceRepositoryImpl();
const fetchMonthlyDiffUseCase = new FetchMonthlyDiff(differenceRepository);

export const fetchMonthlyDiff = createAsyncThunk(
    'differences/fetchMonthlyDiff',
    async ({ warehouseCode, month }: { warehouseCode: string; month: number }, { rejectWithValue }) => {
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
}

const initialState: MonthlyDifferenceState = {
    data: [],
    loading: false,
    error: null,
};

const monthlyDifferenceSlice = createSlice({
    name: 'monthlyDifferences',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMonthlyDiff.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchMonthlyDiff.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMonthlyDiff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as ApiError;
            });
    },
});

export default monthlyDifferenceSlice.reducer;
