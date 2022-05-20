import { configureStore } from '@reduxjs/toolkit'
import userReducer/* , { localStorageMiddleware, reHydrateStore } */ from './users/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
/*   preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorageMiddleware) as ReturnType<typeof getDefaultMiddleware>, */
})

export type RootState = ReturnType<typeof store.getState>