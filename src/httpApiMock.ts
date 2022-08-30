import axios from 'axios'
import {HttpAPI} from "@tradeLanes/models/tradelanes";

export class HttpApiMock implements HttpAPI {
    private readonly endpoint: string

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    async get<T>(url: string, options?: any): Promise<T> {
        const response = await axios.get(this.getApiURL(url, options?.params))
        return response.data as T
    }

    async post<T>(url: string, body?: { [key in string]: any }, options?: any): Promise<T> {
        const response = await axios.post(this.getApiURL(url, options?.params), body)
        return response.data as T
    }

    async put<T>(url: string, body?: { [key in string]: any }, options?: any): Promise<T> {
        const response = await axios.put(this.getApiURL(url, options?.params), body)
        return response.data as T
    }

    async patch<T>(url: string, body?: { [key in string]: any }, options?: any): Promise<T> {
        const response = await axios.patch(this.getApiURL(url, options?.params), body)
        return response.data as T
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore -- Body
    async delete<T>(url: string, body?: { [key in string]: any }, options?: any): Promise<T> {
        const response = await axios.delete(this.getApiURL(url, options?.params))
        return response.data as T
    }

    getApiURL(url: string, options: any): string {
        let u = `${this.endpoint}/${url}`
        if (options?.params) {
            u += `?${this.getURLSearchString(options.params)}`
        }
        return u
    }

    // eslint-disable-next-line class-methods-use-this
    private getURLSearchString(params: object): string {
        const u = new URLSearchParams()
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined) {
                u.append(key, value)
            }
        })
        return decodeURIComponent(u.toString())
    }

}

