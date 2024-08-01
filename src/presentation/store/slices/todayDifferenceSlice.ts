import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TodayDifference } from '../../../domain/models/TodayDifference';
import { DifferenceRepositoryImpl } from '../../../data/repositories/DifferenceRepositoryImpl';
import { FetchTodayDiff } from '../../../domain/usecases/FetchTodayDiff';
import { ApiError } from '../../../domain/models/ApiError';

const differenceRepository = new DifferenceRepositoryImpl();
const fetchTodayDiffUseCase = new FetchTodayDiff(differenceRepository);

export const fetchTodayDiff = createAsyncThunk<TodayDifference[], void, { rejectValue: ApiError }>(
    'differences/fetchTodayDiff',
    async (_, { rejectWithValue }) => {
        const result = await fetchTodayDiffUseCase.execute();
        if (result._tag === 'Left') {
            return rejectWithValue(result.left);
        }
        return result.right;
    }
);

interface TodayDifferenceState {
    data: TodayDifference[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: TodayDifferenceState = {
    data: [],
    loading: false,
    error: null,
};

const todayDifferenceSlice = createSlice({
    name: 'todayDifferences',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodayDiff.pending, (state) => {
                state.loading = true;
                state.error = null;  // Clear previous error
            })
            .addCase(fetchTodayDiff.fulfilled, (state, action: PayloadAction<TodayDifference[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchTodayDiff.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as ApiError;
            });
    },
});

export default todayDifferenceSlice.reducer;
