// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import IAskArtist from '../../interfaces/askArtistInterface'
// import getRequestbyId from '../../functions/askArtist/getRequestbyId'

// export const fetchRequestById = createAsyncThunk(
//     'askArtist/fetchRequestbyId', async (requestId: string) => {
//         try {
//             const data = await getRequestbyId(requestId)
//             if (data.success) {
//                 return data.data as IAskArtist
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }
// )

// type IInitialState = {
//     data: IAskArtist | undefined | null;
//     loading: boolean
//     error: null | string
// }

// const initialState: IInitialState = {
//     data: null,
//     loading: false,
//     error: ''
// };

// const askArtistSlice: any = createSlice({
//     name: 'askArtist',
//     initialState,
//     reducers: {

//     },
//     extraReducers: (builder) => {
//         builder.addCase(fetchRequestById.pending, state => {
//             state.loading = true
//         }),
//             builder.addCase(fetchRequestById.fulfilled, (state, action) => {
//                 state.loading = false
//                 state.data = action.payload
//                 state.error = ''
//             }),
//             builder.addCase(fetchRequestById.rejected, (state, action) => {
//                 state.loading = false
//                 state.data = null
//                 state.error = action.error.message || 'Something went wrong'
//             })
//     }
// })

// export default askArtistSlice.reducer
