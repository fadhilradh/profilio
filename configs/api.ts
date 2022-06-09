import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { stringify } from 'query-string'

export const baseUrl = process.env.NEXT_PUBLIC_API_URL

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

const paramsSerializer = (params?: Record<string, unknown>): string =>
  stringify(params ?? {}, { arrayFormat: 'none' })

export const api = (opts?: AxiosRequestConfig): AxiosInstance => {
  return axios.create({
    baseURL: baseUrl,
    headers,
    paramsSerializer,
    ...opts,
  })
}
