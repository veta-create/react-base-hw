import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filmsSlice from './films-page/filmsSlice';
import basketSlice from './basket-page/basketSlice';

const reducers = combineReducers({
    filmsPage: filmsSlice,
    basketPage: basketSlice,
});

const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;