import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

type User = {
    id: number
    name: string
}
type InitialState = {
    loading: boolean
    users: User[]
    error: string
}
const initialState: InitialState = {
    loading: false,
    users: [],
    error: ''
}

// Generates pending, fulfilled and rejected action types

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
    }
})

export default userSlice.reducer