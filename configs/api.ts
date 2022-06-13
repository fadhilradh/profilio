import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { stringify } from 'query-string'

export const baseURL = process.env.NEXT_PUBLIC_API_URL

export const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const paramsSerializer = (params?: Record<string, unknown>): string =>
  stringify(params ?? {}, { arrayFormat: 'none' })

export function api(opts?: AxiosRequestConfig): AxiosInstance {
  return axios.create({
    baseURL,
    headers,
    paramsSerializer,
    ...opts,
  })
}
