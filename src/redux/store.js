import { configureStore } from "@reduxjs/toolkit";
import countrySlice from "./countrySlice";
import covidSlice from "./covidSlice";
import selectCountrySlice from "./selectCountrySlice";

export const store = configureStore({
    reducer: {
        covid: covidSlice,
        country: countrySlice,
        selectCountry: selectCountrySlice
    }
})