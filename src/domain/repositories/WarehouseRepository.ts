import { Either } from "fp-ts/lib/Either";
import { ApiError } from "../models/ApiError";
import { Warehouse } from "../models/Warehouse";

export interface WarehouseRepository {
    fetchAll(): Promise<Either<ApiError, Warehouse[]>>;
}
