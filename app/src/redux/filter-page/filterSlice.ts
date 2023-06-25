import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameFilter: '',
    genreFilter: 'Выберите жанр'
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
        }
    }
});

export default filterSlice.reducer;
export const { changeNameFilter, changeGenreFilter } = filterSlice.actions;