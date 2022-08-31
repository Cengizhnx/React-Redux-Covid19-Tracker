import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSelectCountry = createAsyncThunk('select/getSelectCountry', async (country) => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/countries/${country}`)
    return res.data;
})

export const selectCountrySlice = createSlice({
    name: "selectCountry",
    initialState: {
        items: {},
        status: "idle"
    },
    reducers: {},
    extraReducers: {
        [fetchSelectCountry.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchSelectCountry.fulfilled]: (state, action) => {
            state.items = action.payload;
            state.status = "succeeded";
        },
    },
})

export default selectCountrySlice.reducer;
