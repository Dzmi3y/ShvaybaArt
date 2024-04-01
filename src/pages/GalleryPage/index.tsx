import React from 'react';
import { GalleryMenu } from '../../components/GalleryMenu';
import { Container } from './styles';
import { useAppSelector } from '../../core/hooks';
import GalleryMenuEnum from '../../core/enums/GalleryMenuEnum';
import GalleryData from '../../core/data/galleryData.json';
import { PictureInfo } from '../../core/types/PictureInfo';
import { Gallery } from '../../components/Gallery';


export const GalleryPage = () => {
  const globalReducer = useAppSelector(state => state.globalReducer);
  const pictureList: PictureInfo[] = GalleryData as unknown as PictureInfo[];
  return (
    <Container>
      <GalleryMenu />
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.GRAPHICS) && (
        <Gallery pictureList={pictureList}/>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.FINEART) && (
        <div style={{textAlign:"center", marginTop:"20px"}}>There are no pictures yet</div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.DRAWINGS) && (
        <div style={{textAlign:"center", marginTop:"20px"}}>There are no pictures yet</div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.SKETCH) && (
        <div style={{textAlign:"center", marginTop:"20px"}}>There are no pictures yet</div>
      )}
    </Container>
  )
}
