import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = process.env.REACT_APP_LUVIO_BACKEND_URL as string

console.log('test: ', BASE_URL)

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}`, credentials: 'same-origin' }),
  endpoints: () => ({})
})

export default apiSlice
