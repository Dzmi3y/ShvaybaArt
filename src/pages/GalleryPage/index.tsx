import React from 'react';
import { GalleryMenu } from '../../components/GalleryMenu';
import { Container } from './styles';
import { useAppSelector } from '../../core/hooks';
import GalleryMenuEnum from '../../core/enums/GalleryMenuEnum';
import GalleryData from '../../core/data/galleryData.json';
import { PictureInfo } from '../../core/types/PictureInfo';
import { Gallery } from '../../components/Gallery';
import { useTranslation } from "react-i18next";


export const GalleryPage = () => {
  const { t } = useTranslation(["gallery"]);
  const globalReducer = useAppSelector(state => state.globalReducer);
  const pictureList: PictureInfo[] = GalleryData as unknown as PictureInfo[];
  return (
    <Container>
      <GalleryMenu />
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.GRAPHICS) && (
        <Gallery pictureList={pictureList}/>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.FINEART) && (
        <div style={{textAlign:"center", marginTop:"20px"}}>{t("noImage", { ns: ['gallery'] })}</div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.DRAWINGS) && (
        <div style={{textAlign:"center", marginTop:"20px"}}>{t("noImage", { ns: ['gallery'] })}</div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.SKETCH) && (
        <div style={{textAlign:"center", marginTop:"20px"}}>{t("noImage", { ns: ['gallery'] })}</div>
      )}
    </Container>
  )
}
