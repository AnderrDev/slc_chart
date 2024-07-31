import { DifferenceRepository } from '../../domain/repositories/DifferenceRepository';
import { fetchTodayDiff, fetchMonthlyDiff } from '../api/DifferenceApi';
import { Either } from 'fp-ts/lib/Either';
import { ApiError } from '../../domain/models/ApiError';
import { TodayDifference } from '../../domain/models/TodayDifference';
import { MonthlyDifference } from '../../domain/models/MonthlyDifference';

export class DifferenceRepositoryImpl implements DifferenceRepository {
    async fetchTodayDiff(): Promise<Either<ApiError, TodayDifference[]>> {
        return await fetchTodayDiff();
    }

    async fetchMonthlyDiff(warehouseCode: string, month: number): Promise<Either<ApiError, MonthlyDifference[]>> {
        return await fetchMonthlyDiff(warehouseCode, month);
    }
}