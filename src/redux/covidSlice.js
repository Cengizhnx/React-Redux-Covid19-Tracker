import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStats = createAsyncThunk('stats/getStats', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}`)
    return res.data;
})


export const covidSlice = createSlice({
    name: 'covid',
    initialState: {
        items: {},
        status: "idle",
    },
    reducers: {},
    extraReducers: {
        [fetchStats.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchStats.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
        },
    },
})

export default covidSlice.reducer;