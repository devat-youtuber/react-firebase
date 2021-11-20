import { configureStore } from '@reduxjs/toolkit'
import authSlice from './slice/authSlice'
import profileSlice from './slice/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    profile: profileSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch