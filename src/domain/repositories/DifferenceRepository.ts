import { Either } from "fp-ts/lib/Either";
import { ApiError } from "../models/ApiError";
import { TodayDifference } from "../models/TodayDifference";
import { MonthlyDifference } from "../models/MonthlyDifference";
export interface DifferenceRepository {
    fetchTodayDiff(): Promise<Either<ApiError, TodayDifference[]>>;
    fetchMonthlyDiff(warehouseCode: string, month: number): Promise<Either<ApiError, MonthlyDifference[]>>;
}