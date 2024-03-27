import React from 'react'
import { GalleryMenu } from '../../components/GalleryMenu'
import { Container } from './styles'
import { useAppSelector } from '../../core/hooks';
import GalleryMenuEnum from '../../core/enums/GalleryMenuEnum';
import { Fineart } from './Fineart';
import { Drawings } from './Drawings';
import { Graphic } from './Graphic';
import { Sketch } from './Sketch';

export const GalleryPage = () => {
  const globalReducer = useAppSelector(state => state.globalReducer);
  return (
    <Container>
      <GalleryMenu />
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.GRAPHICS) && (
        <Graphic />
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.FINEART) && (
        <Fineart />
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.DRAWINGS) && (
        <Drawings />
      )}
      {(globalReducer.SelectedGalleryItem === GalleryMenuEnum.SKETCH) && (
        <Sketch />
      )}
    </Container>
  )
}
