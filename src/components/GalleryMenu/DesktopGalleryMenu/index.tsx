import React from 'react'
import { Container, Text } from './styles';
import { useTranslation } from "react-i18next";
import { GalleryMenuProps } from '..';



export const DesktopGalleryMenu: React.FC<GalleryMenuProps> = ({ galleryItems, selectedGalleryItem, changeSelectedItem, isTamaraGallery = false }) => {
        const { t } = useTranslation(['gallery']);


        

        return (
            <Container className={isTamaraGallery ? "red" : ""}>
                {galleryItems.map((title, i) => (<Text key={i} className={selectedGalleryItem === title ? "selected" : ""}
                    onClick={() => { changeSelectedItem(title) }}>{t(title, { ns: ['gallery'] })}</Text>))}
            </Container>
        )
    }
