import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import askArtistReducer from '@/features/askArtistSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        askArtist: askArtistReducer
    }
})

export default store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch