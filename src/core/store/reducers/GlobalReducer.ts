import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GlobalState } from "../../types/states/GlobalState";
import LangEnum from "../../enums/LangEnum";
import GalleryMenuEnum from "../../enums/GalleryMenuEnum";

const initialState: GlobalState = {
    Lang: LangEnum.EN,
    SelectedGalleryItem: GalleryMenuEnum.GRAPHICS,
    SelectedTamaraGalleryItem: GalleryMenuEnum.GRAPHICS
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
        changeTamaraGalleryItem(state, action: PayloadAction<GalleryMenuEnum>) {
            state.SelectedTamaraGalleryItem = action.payload
        },
    }
});

export const { changeLang, changeGalleryItem, changeTamaraGalleryItem } = globalSlice.actions
export default globalSlice.reducer;