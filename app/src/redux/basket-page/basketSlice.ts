import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Basket, BasketState } from "../../../types";

const initialState: BasketState = {
    basket: [],
    ticketsCount: 0
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        increment(state) {
            state.ticketsCount++;;
        },
        decrement(state) {
            state.ticketsCount--;
        },
        addTicket(state, action) {
            if (state.basket.length) {
                let check = state.basket.find(t => t.id === action.payload.id ? true : false);
                if (check) {
                    state.basket = state.basket.map(t => {
                        if (t.id === action.payload.id) {
                            t.tickets += 1;
                        };
                        return t;
                    });
                } else {
                    state.basket = [...state.basket, action.payload];
                };
            } else {
                state.basket = [...state.basket, action.payload];
            };
        },
        removeTicket(state, action) {
            let removeIndex = -1;

            let check = state.basket.map((t, i) => {
                if (t.id === action.payload.id) {
                    t.tickets -= 1;
                    if (t.tickets === 0) {
                        removeIndex = i;
                    };
                };
                return t;
            });

            if (removeIndex !== -1) {
                state.basket = state.basket.filter((t, i) => i !== removeIndex);
            };
        },
        removeAll(state, action) {
            let removeIndex = -1;
            state.basket = state.basket.map((t, i) => {
                if (t.id === action.payload) {
                    state.ticketsCount -= state.basket[i].tickets;
                    t.tickets = 0;
                    if (t.tickets === 0) {
                        removeIndex = i;
                    };
                }
                return t;
            });

            if (removeIndex !== -1) {
                state.basket = state.basket.filter((t, i) => i !== removeIndex);
            };
        }
    }
});

export default basketSlice.reducer;
export const { increment, decrement, addTicket, removeTicket, removeAll } = basketSlice.actions;