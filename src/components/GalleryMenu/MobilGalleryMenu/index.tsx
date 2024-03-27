import React, { useEffect, useRef, useState } from 'react'
import { AngleImg, Container, CurrentTitle, Modal, ModalTextContainer, TitleContainer, Text, ImgContainer } from './styles'
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { useTranslation } from 'react-i18next';
import { changeGalleryItem } from '../../../core/store/reducers/GlobalReducer';
import GalleryMenuEnum from '../../../core/enums/GalleryMenuEnum';
import Angle from '../../../assets/images/common/angle.png';

export const MobilGalleryMenu = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const globalReducer = useAppSelector(state => state.globalReducer);
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['gallery']);

  const changeSelectedItem = (selectedItem: GalleryMenuEnum) => {
    dispatch(changeGalleryItem(selectedItem));
  }

  const galleryItems: GalleryMenuEnum[] = [GalleryMenuEnum.GRAPHICS, GalleryMenuEnum.FINEART, GalleryMenuEnum.DRAWINGS, GalleryMenuEnum.SKETCH]

  const modal = useRef<HTMLInputElement>(null);
  const titlePanel = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const onClick = (e: any) => {
      if (modal.current && titlePanel.current) {
        const isOutsideClick = !modal.current.contains(e.target);
        const isNottitlePanelClick = !titlePanel.current.contains(e.target);
        if (isOutsideClick && isNottitlePanelClick) {
          setModalIsOpen(false);
        }
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);

  }, []);

  return (
    <Container>
      <TitleContainer ref={titlePanel} onClick={() => setModalIsOpen(!modalIsOpen)}>
        <CurrentTitle>{t(globalReducer.SelectedGalleryItem, { ns: ['gallery'] })}</CurrentTitle>
        <ImgContainer className={modalIsOpen ? "open" : ""}>
          <AngleImg className={modalIsOpen ? "open" : ""} src={Angle} alt='arrow' />
        </ImgContainer>
      </TitleContainer>
      <Modal ref={modal} className={modalIsOpen ? "open" : ""}>
        {galleryItems.map((title, i) => (
          <ModalTextContainer key={i} className={globalReducer.SelectedGalleryItem === title ? "selected" : ""} onClick={() => changeSelectedItem(title)}>
            <Text>{t(title, { ns: ['gallery'] })}</Text>
          </ModalTextContainer>
        ))}

      </Modal>
    </Container>
  )
}
