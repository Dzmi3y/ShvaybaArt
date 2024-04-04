import React, { useEffect, useRef, useState } from 'react'
import { AngleImg, Container, CurrentTitle, Modal, ModalTextContainer, TitleContainer, Text, ImgContainer } from './styles'
import { useTranslation } from 'react-i18next';
import Angle from '../../../assets/images/common/angle.png';
import { GalleryMenuProps } from '..';

export const MobilGalleryMenu: React.FC<GalleryMenuProps> = ({ galleryItems, selectedGalleryItem, changeSelectedItem, isTamaraGallery = false }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const { t } = useTranslation(['gallery']);


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
    <Container className={isTamaraGallery ? "red" : ""}>
      <TitleContainer ref={titlePanel} onClick={() => setModalIsOpen(!modalIsOpen)}>
        <CurrentTitle>{t(selectedGalleryItem, { ns: ['gallery'] })}</CurrentTitle>
        <ImgContainer className={modalIsOpen ? "open" : ""}>
          <AngleImg className={modalIsOpen ? "open" : ""} src={Angle} alt='arrow' />
        </ImgContainer>
      </TitleContainer>
      <Modal ref={modal} className={modalIsOpen ? "open" : ""}>
        {galleryItems.map((title, i) => (
          <ModalTextContainer key={i} className={selectedGalleryItem === title ? "selected" : ""} onClick={() => changeSelectedItem(title)}>
            <Text>{t(title, { ns: ['gallery'] })}</Text>
          </ModalTextContainer>
        ))}

      </Modal>
    </Container>
  )
}
