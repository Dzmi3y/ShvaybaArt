import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../types/states/CartState";
import { PictureInfo } from "../../types/PictureInfo";
import { Exhibition } from "../../types/Exhibition";
import { generateUuidv4 } from "../../hooks";

const initialState: CartState = {
    Cart: [],
    CartCounter: 0,
}

const setLocalStore = (state: CartState) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
}

const getLocalStore = () => {
    let result = initialState;
    const storedCart = window.localStorage.getItem("cart");
    if (storedCart && storedCart.length>2) {
        result = JSON.parse(storedCart) as CartState
    }
    return result;
}

const globalSlice = createSlice({
    name: 'cart',
    initialState: getLocalStore(),
    reducers: {
        addItemToCart(state, action: PayloadAction<PictureInfo | Exhibition>) {
            const cartId = generateUuidv4();
            const cartItem: PictureInfo | Exhibition = { ...action.payload, cartId }
            state.Cart = [...state.Cart, cartItem];
            state.CartCounter = state.Cart.length;
            setLocalStore(state);
        },
        changeExhibitionPrice(state, action: PayloadAction<{ cartId: string, selectedPriceId: string }>) {
            const currentExhibition = state.Cart.find((ic => action.payload.cartId === ic.cartId)) as Exhibition;
            currentExhibition.selectedPriceId = action.payload.selectedPriceId;
            setLocalStore(state);
        },
        removeItemFromCart(state, action: PayloadAction<string | undefined>) {
            state.Cart = state.Cart.filter((catrItem) => catrItem.cartId !== action.payload);
            state.CartCounter = state.Cart.length;
            setLocalStore(state);
        },
        createOrder(state, action: PayloadAction<{ cartIdList: string[], email: string, phone: string }>) {
            console.log(action.payload);
            state.Cart = state.Cart.filter(c => !action.payload.cartIdList.find(id => id === c.cartId));
            state.CartCounter = state.Cart.length;
            setLocalStore(state);
        }
    }
});

export const { addItemToCart, removeItemFromCart, changeExhibitionPrice, createOrder } = globalSlice.actions
export default globalSlice.reducer;