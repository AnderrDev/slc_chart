import { Either } from 'fp-ts/lib/Either';
import { ApiError } from '../models/ApiError';
import { WarehouseRepository } from '../repositories/WarehouseRepository';
import { Warehouse } from '../models/Warehouse';

export class FetchWarehouses {
    constructor(private warehouseRepository: WarehouseRepository) { }

    async execute(): Promise<Either<ApiError, Warehouse[]>> {
        return await this.warehouseRepository.fetchAll();
    }
}
