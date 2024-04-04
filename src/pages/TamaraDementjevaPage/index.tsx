import React from 'react';
import { GalleryMenu } from '../../components/GalleryMenu';
import { BackgroundDiv, Container, Title } from './styles';
import { useAppSelector } from '../../core/hooks';
import GalleryMenuEnum from '../../core/enums/GalleryMenuEnum';
import TamaraData from '../../core/data/tamaraData.json';
import { PictureInfo } from '../../core/types/PictureInfo';
import { Gallery } from '../../components/Gallery';
import { useTranslation } from "react-i18next";

export const TamaraDementjevaPage = () => {
  const { t } = useTranslation(["gallery"]);
  const globalReducer = useAppSelector(state => state.globalReducer);
  const pictureList: PictureInfo[] = TamaraData as unknown as PictureInfo[];
  return (
    <Container>
      <Title> {t("galletyTamaraTitle", { ns: ['gallery'] })}</Title>
      <GalleryMenu isTamaraGallery />
      {(globalReducer.SelectedTamaraGalleryItem === GalleryMenuEnum.GRAPHICS) && (
        <Gallery  isRed pictureList={pictureList} />
      )}
      {(globalReducer.SelectedTamaraGalleryItem === GalleryMenuEnum.FINEART) && (
        <>
          <div style={{ textAlign: "center", marginTop: "20px" }}>{t("noImage", { ns: ['gallery'] })}</div>
          <BackgroundDiv></BackgroundDiv>
        </>
      )}
    </Container>
  )
}
