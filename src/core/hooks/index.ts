import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const generateUuidv4 = () => {
    var dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
        function (c) {
            var rnd = Math.random() * 16;
            rnd = (dt + rnd) % 16 | 0;
            dt = Math.floor(dt / 16);
            return (c === 'x' ? rnd : (rnd & 0x3 || 0x8)).toString(16);
        });
}