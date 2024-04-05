import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/states/CartState";
import { PictureInfo } from "../../types/PictureInfo";
import { Exhibition } from "../../types/Exhibition";

const initialState: CartState = {
    Cart: [],
    CartCounter: 0,
}

const globalSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<PictureInfo | Exhibition>) {
            state.Cart = [...state.Cart, action.payload];
            state.CartCounter = state.Cart.length;
        },
        removeItemFromCart(state, action: PayloadAction<string>) {
            state.Cart = state.Cart.filter((picture) => picture.id === action.payload);
            state.CartCounter = state.Cart.length;
        },
    }
});

export const { addItemToCart, removeItemFromCart } = globalSlice.actions
export default globalSlice.reducer;