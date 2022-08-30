export type HttpAPI = {
    /* eslint-disable */
    get: <T = unknown>(url: string, options?: any) => Promise<T>
    post: <T = unknown>(url: string, body?: any, options?: any) => Promise<T>
    put: <T = unknown>(url: string, body?: any, options?: any) => Promise<T>
    patch: <T = unknown>(url: string, body?: any, options?: any) => Promise<T>
    delete: <T = unknown>(url: string, body?: any, options?: any) => Promise<T>
}

export interface PaginationRequest {
    orderBy: string;
    orderByDesc: boolean;
    pageSize: number;
    page: number;
}


export interface PaginationResponse<T> extends PaginationRequest {
    total: number;
    results: T[];
}

export declare class TradeLaneResponse {
    id: string;
    code: string;
}
