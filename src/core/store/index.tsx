import { configureStore } from '@reduxjs/toolkit';
import GlobalReducer from './reducers/GlobalReducer';
import CartReducer from './reducers/CartReducer';

const store = configureStore({
    reducer: {
        globalReducer: GlobalReducer,
        cartReducer:CartReducer
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;