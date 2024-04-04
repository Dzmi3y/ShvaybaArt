import GalleryMenuEnum from "../../enums/GalleryMenuEnum";
import LangEnum from "../../enums/LangEnum";

export type GlobalState = {
    Lang: LangEnum;
    SelectedGalleryItem: GalleryMenuEnum;
    SelectedTamaraGalleryItem: GalleryMenuEnum;
}