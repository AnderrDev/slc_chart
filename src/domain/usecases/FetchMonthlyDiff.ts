import { Either } from 'fp-ts/lib/Either';
import { DifferenceRepository } from '../repositories/DifferenceRepository';
import { ApiError } from '../models/ApiError';
import { MonthlyDifference } from '../models/MonthlyDifference';

export class FetchMonthlyDiff {
    constructor(private differenceRepository: DifferenceRepository) { }

    async execute(warehouseCode: string, month: number): Promise<Either<ApiError, MonthlyDifference[]>> {
        return await this.differenceRepository.fetchMonthlyDiff(warehouseCode, month);
    }
}