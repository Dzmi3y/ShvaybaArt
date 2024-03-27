import GalleryMenuEnum from "../../enums/GalleryMenuEnum";
import LangEnum from "../../enums/LangEnum";

export type GlobalState={
    CartCounter:number;
    Lang : LangEnum;
    SelectedGalleryItem: GalleryMenuEnum;
}