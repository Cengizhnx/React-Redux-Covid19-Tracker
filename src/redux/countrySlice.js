import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCountries = createAsyncThunk('countries/getCountries', async () => {
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}/countries`)
    return res.data;
})

export const countrySlice = createSlice({
    name: 'country',
    initialState: {
        items: [],
        status: "idle",
    },
    reducers: {},
    extraReducers: {
        [fetchCountries.pending]: (state, action) => {
            state.status = "loading";
        },
        [fetchCountries.fulfilled]: (state, action) => {
            state.countries = action.payload
            state.status = "succeeded";
        }
    },
})

export default countrySlice.reducer;