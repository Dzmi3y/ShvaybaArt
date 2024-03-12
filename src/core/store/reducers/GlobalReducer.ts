import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../../types/states/GlobalState";
import LangEnum from "../../enums/LangEnum";

const initialState: GlobalState = {
    CartCounter: 3,
    Lang: LangEnum.EN,
}

const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        changeCartCounter(state, action: PayloadAction<number>) {
            state.CartCounter = action.payload;
        },
        changeLang(state, action: PayloadAction<LangEnum>) {
            state.Lang = action.payload
        },
    }
});

export const { changeCartCounter, changeLang, } = globalSlice.actions
export default globalSlice.reducer;