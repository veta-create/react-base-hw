import { createSlice } from "@reduxjs/toolkit";
import { FilmsState } from "../../../types";

const initialState: FilmsState = {
    allMovies: [],
    cinemas: []
};

const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        setMovies(state, action) {
            state.allMovies = action.payload;
        },
        setCinemas(state, action) {
            state.cinemas = action.payload;
        }
    }
});

export default filmsSlice.reducer;
export const { setMovies, setCinemas } = filmsSlice.actions;