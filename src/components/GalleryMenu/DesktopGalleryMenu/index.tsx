import React from 'react'
import { Container, Text } from './styles'
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { changeGalleryItem } from '../../../core/store/reducers/GlobalReducer';
import GalleryMenuEnum from '../../../core/enums/GalleryMenuEnum';


export const DesktopGalleryMenu = () => {
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();
    const { t } = useTranslation(['gallery']);

    const changeSelectedItem = (selectedItem: GalleryMenuEnum) => {
        dispatch(changeGalleryItem(selectedItem));
    }

    const galleryItems: GalleryMenuEnum[] = [GalleryMenuEnum.GRAPHICS, GalleryMenuEnum.FINEART, GalleryMenuEnum.DRAWINGS, GalleryMenuEnum.SKETCH]


    return (
        <Container>
            {galleryItems.map((title, i) => (<Text key={i} className={globalReducer.SelectedGalleryItem === title ? "selected" : ""}
                onClick={() => { changeSelectedItem(title) }}>{t(title, { ns: ['gallery'] })}</Text>))}
        </Container>
    )
}
