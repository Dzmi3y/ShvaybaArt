import React from 'react'
import { DesktopGalleryMenu } from './DesktopGalleryMenu'
import { MobilGalleryMenu } from './MobilGalleryMenu'
import { useAppDispatch, useAppSelector } from '../../core/hooks';
import { changeGalleryItem, changeTamaraGalleryItem } from '../../core/store/reducers/GlobalReducer';
import GalleryMenuEnum from '../../core/enums/GalleryMenuEnum';

export type GalleryMenuProps = {
  galleryItems: GalleryMenuEnum[],
  selectedGalleryItem: GalleryMenuEnum,
  changeSelectedItem: (title: GalleryMenuEnum) => void,
  isTamaraGallery?: boolean
}


export const GalleryMenu: React.FC<{ isTamaraGallery?: boolean }> = ({ isTamaraGallery = false }) => {

  const globalReducer = useAppSelector(state => state.globalReducer);
  const dispatch = useAppDispatch();

  const changeSelectedItem = (selectedItem: GalleryMenuEnum) => {
    if (isTamaraGallery) {
      dispatch(changeTamaraGalleryItem(selectedItem));
    }
    else {
      dispatch(changeGalleryItem(selectedItem));
    }
  }

  const galleryItems: GalleryMenuEnum[] = [GalleryMenuEnum.GRAPHICS, GalleryMenuEnum.FINEART, GalleryMenuEnum.DRAWINGS, GalleryMenuEnum.SKETCH];
  const tamaraGalleryItems: GalleryMenuEnum[] = [GalleryMenuEnum.GRAPHICS, GalleryMenuEnum.FINEART];
  const items = isTamaraGallery ? tamaraGalleryItems : galleryItems;


  return (<>
    <DesktopGalleryMenu changeSelectedItem={changeSelectedItem} galleryItems={items}
      selectedGalleryItem={isTamaraGallery ? globalReducer.SelectedTamaraGalleryItem : globalReducer.SelectedGalleryItem} isTamaraGallery={isTamaraGallery} />
    <MobilGalleryMenu changeSelectedItem={changeSelectedItem} galleryItems={items}
      selectedGalleryItem={isTamaraGallery ? globalReducer.SelectedTamaraGalleryItem : globalReducer.SelectedGalleryItem} isTamaraGallery={isTamaraGallery} />
  </>
  )
}
