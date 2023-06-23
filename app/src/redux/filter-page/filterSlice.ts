import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nameFilter: ''
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeNameFilter(state, action) {
            state.nameFilter = action.payload;
        },
    }
});

export default filterSlice.reducer;
export const { changeNameFilter } = filterSlice.actions;