import apiClient from './apiClient';
import { ApiError } from '../../domain/models/ApiError';
import { Either, left, right } from 'fp-ts/lib/Either';
import { TodayDifference } from '../../domain/models/TodayDifference';
import { MonthlyDifference } from '../../domain/models/MonthlyDifference';

export const fetchTodayDiff = async (): Promise<Either<ApiError, TodayDifference[]>> => {
    try {
        const response = await apiClient.get('/billing/clerk-sap/today-diff');
        if (response.data && response.data.data) {
            return right(response.data.data);
        } else {
            throw new Error('Invalid data format');
        }
    } catch (error: any) {
        const apiError: ApiError = {
            message: error.message,
            status: error.response?.status,
        };
        return left(apiError);
    }
};

export const fetchMonthlyDiff = async (warehouseCode: string, month: number): Promise<Either<ApiError, MonthlyDifference[]>> => {
    try {
        const response = await apiClient.get(`/billing/clerk-sap/monthly-diff/${warehouseCode}/${month}`);
        if (response.data && response.data.data) {
            return right(response.data.data);
        } else {
            throw new Error('Invalid data format');
        }
    } catch (error: any) {
        const apiError: ApiError = {
            message: error.message,
            status: error.response?.status,
        };
        return left(apiError);
    }
};