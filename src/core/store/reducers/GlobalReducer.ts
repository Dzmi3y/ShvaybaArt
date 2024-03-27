import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../../types/states/GlobalState";
import LangEnum from "../../enums/LangEnum";
import GalleryMenuEnum from "../../enums/GalleryMenuEnum";

const initialState: GlobalState = {
    Lang: LangEnum.EN,
    SelectedGalleryItem: GalleryMenuEnum.GRAPHICS
}

const globalSlice = createSlice({
    name: 'global',
    initialState: initialState,
    reducers: {
        changeLang(state, action: PayloadAction<LangEnum>) {
            state.Lang = action.payload
        },
        changeGalleryItem(state, action: PayloadAction<GalleryMenuEnum>) {
            state.SelectedGalleryItem = action.payload
        },
    }
});

export const {changeLang, changeGalleryItem} = globalSlice.actions
export default globalSlice.reducer;