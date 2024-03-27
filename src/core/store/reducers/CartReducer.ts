import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/states/CartState";
import { PictureInfo } from "../../types/PictureInfo";

const initialState: CartState = {
    Cart: [],
    CartCounter: 0,
}

const globalSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addPictureToCart(state, action: PayloadAction<PictureInfo>) {
            state.Cart = [...state.Cart, action.payload];
            state.CartCounter = state.Cart.length;
        },
        removePictureFromCart(state, action: PayloadAction<string>) {
            state.Cart = state.Cart.filter((picture) => picture.id === action.payload);
            state.CartCounter = state.Cart.length;
        },
    }
});

export const { addPictureToCart, removePictureFromCart } = globalSlice.actions
export default globalSlice.reducer;