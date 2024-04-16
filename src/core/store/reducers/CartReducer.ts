import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/states/CartState";
import { PictureInfo } from "../../types/PictureInfo";
import { Exhibition } from "../../types/Exhibition";
import { generateUuidv4 } from "../../hooks";

const initialState: CartState = {
    Cart: [],
    CartCounter: 0,
}

const globalSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action: PayloadAction<PictureInfo | Exhibition>) {
            const cartId = generateUuidv4();
            const cartItem: PictureInfo | Exhibition = { ...action.payload, cartId }
            state.Cart = [...state.Cart, cartItem];
            state.CartCounter = state.Cart.length;
        },
        removeItemFromCart(state, action: PayloadAction<string | undefined>) {
            state.Cart = state.Cart.filter((catrItem) => catrItem.cartId !== action.payload);

            state.CartCounter = state.Cart.length;
        },
    }
});

export const { addItemToCart, removeItemFromCart } = globalSlice.actions
export default globalSlice.reducer;