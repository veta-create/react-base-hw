import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameFilter: "",
    genreFilter: "Выберите жанр",
    cinemaFilter: { name: "Выберите кинотеатр", movies: [] }
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeNameFilter(state, action) {
            state.nameFilter = action.payload;
        },
        changeGenreFilter(state, action) {
            state.genreFilter = action.payload;
        },
        changeCinemaFilter(state, action) {
            state.cinemaFilter = { name: action.payload.name, movies: action.payload.movies };
        }
    }
});

export default filterSlice.reducer;
export const { changeNameFilter, changeGenreFilter, changeCinemaFilter } = filterSlice.actions;