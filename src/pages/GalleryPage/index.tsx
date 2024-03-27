import React from 'react'
import { GalleryMenu } from '../../components/GalleryMenu'
import { Container } from './styles'
import { useAppSelector } from '../../core/hooks';
import GalleryMenuEnum from '../../core/enums/GalleryMenuEnum';


export const GalleryPage = () => {
  const globalReducer = useAppSelector(state => state.globalReducer);
  return (
    <Container>
      <GalleryMenu />
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.GRAPHICS) && (
        <div> Graphic </div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.FINEART) && (
        <div>Fineart </div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.DRAWINGS) && (
        <div>Drawings</div>
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.SKETCH) && (
        <div>Sketch</div>
      )}
    </Container>
  )
}
