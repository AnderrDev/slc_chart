import { Either } from 'fp-ts/lib/Either';
import { ApiError } from '../models/ApiError';
import { DifferenceRepository } from '../repositories/DifferenceRepository';
import { TodayDifference } from '../models/TodayDifference';

export class FetchTodayDiff {
    constructor(private differenceRepository: DifferenceRepository) { }

    async execute(): Promise<Either<ApiError, TodayDifference[]>> {
        return await this.differenceRepository.fetchTodayDiff();
    }
}
