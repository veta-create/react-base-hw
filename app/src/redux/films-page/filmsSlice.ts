import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        },
    }
});

export default filmsSlice.reducer;
export const { setMovies, setCinemas } = filmsSlice.actions;