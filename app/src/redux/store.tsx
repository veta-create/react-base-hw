import { combineReducers, configureStore } from '@reduxjs/toolkit'
import filmsSlice from './films-page/filmsSlice';
import basketSlice from './basket-page/basketSlice';
import filterSlice from './filter-page/filterSlice';

const reducers = combineReducers({
    filmsPage: filmsSlice,
    basketPage: basketSlice,
    filterPage: filterSlice
});

const store = configureStore({ reducer: reducers });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;