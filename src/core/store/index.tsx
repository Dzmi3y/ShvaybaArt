import { configureStore } from '@reduxjs/toolkit';
import GlobalReducer from './reducers/GlobalReducer';

const store = configureStore({
    reducer: {
        globalReducer: GlobalReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;