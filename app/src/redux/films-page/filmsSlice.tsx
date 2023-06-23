import { createSlice } from '@reduxjs/toolkit';
// import { SettingsState } from '../../../types';

const initialState = {
    allFilms: [],
    cinemas: []
};

const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        setFilms(state, action) {
            state.allFilms = action.payload;
        },
        setCinemas(state, action) {
            state.cinemas = action.payload;
        },
    }
});

export default filmsSlice.reducer;
export const { setFilms, setCinemas } = filmsSlice.actions;