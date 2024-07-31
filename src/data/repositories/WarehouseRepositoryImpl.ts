import { WarehouseRepository } from '../../domain/repositories/WarehouseRepository';
import { fetchWarehouses } from '../api/WarehouseApi';
import { Either } from 'fp-ts/lib/Either';
import { ApiError } from '../../domain/models/ApiError';
import { TodayDifference } from '../../domain/models/TodayDifference';

export class WarehouseRepositoryImpl implements WarehouseRepository {
    async fetchAll(): Promise<Either<ApiError, TodayDifference[]>> {
        return await fetchWarehouses();
    }
}