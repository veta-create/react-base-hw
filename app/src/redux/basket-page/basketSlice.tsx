import { createSlice } from '@reduxjs/toolkit';
// import { SettingsState } from '../../../types';

const initialState = {
    ticketsCount: 0
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        increment(state, action) {
            state.ticketsCount++;;
        },
        decrement(state, action) {
            state.ticketsCount++;
        },
    }
});

export default basketSlice.reducer;
export const { increment, decrement } = basketSlice.actions;