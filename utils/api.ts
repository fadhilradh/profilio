export const ts = 'rs'

// import type { AxiosError, AxiosPromise, AxiosRequestConfig } from 'axios'
// import axios from 'axios'
// import type {
//   QueryKey,
//   UseMutationOptions,
//   UseQueryOptions,
//   UseQueryResult,
// } from 'react-query'
// import { useMutation, useQuery } from 'react-query'

// import {
//   baseURL,
//   headers as defaultHeaders,
//   paramsSerializer as defaultParamsSerializer,
// } from 'configs/api'

// interface QueryApiConfig<TQueryFnData = unknown> {
//   axiosConfig?: AxiosRequestConfig
//   queryConfig?: UseQueryOptions<TQueryFnData>
//   queryKey?: QueryKey
// }

// interface MutationApiConfig<
//   TData = unknown,
//   TError = unknown,
//   TVariables = void
// > {
//   axiosConfig?: AxiosRequestConfig
//   mutationConfig?: UseMutationOptions<TData, TError, TVariables>
// }

// const DEFAULT_QUERY_CONFIG = {
//   useErrorBoundary: true,
// }
// let refreshTokenStatus: 'loading' | 'idle' = 'idle'

// /**
//  * Wrapper for react-query's useQuery that injects Guru Token to auth header
//  * @param {string} path Request path
//  * @param {object} opts.axiosConfig Axios config object
//  * @param {object} opts.queryConfig React Query's query config object
//  * @param {(string|Array.<*>)} opts.queryKey React Query's query key
//  * @returns React Query query object
//  */
// export function useQueryApi<TQueryFnData, TQueryFnError = AxiosError>(
//   path: string,
//   {
//     axiosConfig = {},
//     queryConfig = {},
//     queryKey = null,
//   }: QueryApiConfig<TQueryFnData> = {
//     axiosConfig: {},
//     queryConfig: {},
//     queryKey: null,
//   }
// ): UseQueryResult<TQueryFnData, TQueryFnError> {
//   return useQuery<TQueryFnData, TQueryFnError>(
//     queryKey ?? [path, ...(axiosConfig?.params ? [axiosConfig?.params] : [])],
//     (): Promise<TQueryFnData> =>
//       api<TQueryFnData>(path, { method: 'GET', ...axiosConfig }),
//     {
//       ...DEFAULT_QUERY_CONFIG,
//       ...queryConfig,
//     }
//   )
// }

// /**
//  * Wrapper for react-query's useMutation that injects Guru Token to auth header
//  * @param {(string|Function)} path Request path
//  * @param {object} opts.axiosConfig Axios config object
//  * @param {object} opts.mutationConfig React Query's mutation config object
//  * @returns React Query mutation object
//  */
// export function useMutationApi<TData, TError = Error, TVariables = void>(
//   path: string | ((data: TVariables) => string),
//   {
//     axiosConfig = {},
//     mutationConfig = {},
//   }: MutationApiConfig<TData, TError, TVariables> = {
//     axiosConfig: {},
//     mutationConfig: {},
//   }
// ) {
//   return useMutation<TData, TError, TVariables>(
//     (data: TVariables): Promise<TData> => {
//       const pathApi = typeof path === 'function' ? path(data) : path
//       return api<TData>(pathApi, { ...axiosConfig, ...(data ? { data } : {}) })
//     },
//     mutationConfig
//   )
// }

// export async function api<T>(
//   path: string,
//   options: AxiosRequestConfig = {}
// ): Promise<T> {
//   const request = (): AxiosPromise<T> => {
//     const url = `${baseURL}${path}`
//     const requestHeaders = {
//       ...(options.headers ?? defaultHeaders),
//       Authorization: `Bearer ${
//         getTokenData()?.guruToken || getTokenData()?.idToken
//       }`,
//     }

//     return axios({
//       ...options,
//       headers: requestHeaders,
//       paramsSerializer: options.paramsSerializer ?? defaultParamsSerializer,
//       url,
//     })
//   }

//   try {
//     /** Execute refresh session on every request, token expiry
//         checking is to be done inside it
//       */
//     await refreshSession()
//     const response = await request()
//     return response.data
//   } catch (e) {
//     if (e instanceof SessionError) {
//       const logoutUrl = `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH}/logout?error=SessionExpired`
//       window.location.href = logoutUrl
//     } else {
//       throw e
//     }
//   }
// }

// export async function refreshSession() {
//   const session = getTokenData()
//   const expiryTime = new Date(session?.expiredAt).getTime()
//   const currentTime = new Date().getTime()
//   const isTokenExpired = expiryTime < currentTime

//   try {
//     if (isTokenExpired && refreshTokenStatus === 'idle') {
//       refreshTokenStatus = 'loading'
//       const refreshAxiosConfig: AxiosRequestConfig = {
//         url: `${baseURL}/teachers/v1alpha1/guru-token/refresh`,
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${session.guruToken}`,
//         },
//       }
//       const {
//         data: { expiredAt, guruToken },
//       } = (await axios(refreshAxiosConfig)).data
//       persistTokenData({
//         guruToken,
//         expiredAt,
//         userId: session?.userId,
//         email: session?.email,
//       })
//     }
//   } catch (e) {
//     throw new SessionError('Anda butuh login kembali.')
//   } finally {
//     refreshTokenStatus = 'idle'
//   }
// }
