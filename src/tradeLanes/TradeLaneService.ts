import {HttpAPI, PaginationResponse, TradeLaneResponse} from "./models/tradelanes";

export default class TradeLaneService {
  private tradeLaneApi: HttpAPI

  private endpoint = 'trade-lanes'

  constructor(api: HttpAPI) {
    this.tradeLaneApi = api
  }

  async getAllTradeLanes(page: number, pageSize?: number): Promise<PaginationResponse<TradeLaneResponse>> {
    return this.tradeLaneApi.get<PaginationResponse<TradeLaneResponse>>(
      `${this.endpoint}?page=${page}&pageSize=${pageSize ?? 20}`
    )
  }

  async searchTradeLanes(
    query: string,
    page: number,
    pageSize?: number
  ): Promise<PaginationResponse<TradeLaneResponse>> {
    return this.tradeLaneApi.get<PaginationResponse<TradeLaneResponse>>(
      `${this.endpoint}?query=${query}&page=${page}&pageSize=${pageSize ?? 20}`
    )
  }
}
