import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import { charactersApi } from './apis/characters'
import { setupListeners } from '@reduxjs/toolkit/query'
import { locationsApi } from './apis/locations'
import { filterReducer } from './slices/filter'

const reducer = (state: any) => state

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware, locationsApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
