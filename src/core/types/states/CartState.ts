import { Exhibition } from "../Exhibition";
import { PictureInfo } from "../PictureInfo"

export type CartState = {
    Cart: (PictureInfo | Exhibition)[];
    CartCounter: number;
}