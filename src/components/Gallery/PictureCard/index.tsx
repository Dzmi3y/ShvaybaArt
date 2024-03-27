import React from 'react'
import { Containder } from '../../CardAbout/styles'
import { PictureInfo } from '../../../core/types/PictureInfo'
import { Description, DesktopImage, HoverImageOverlay, ImageContainer, InfoContainer, MobilImage, Price, SaleContainer, ScaleIcon, Title } from './styles'
import { BorderedButton } from '../../Buttons/BorderedButton'
import ScaleArrows from '../../../assets/images/common/scale_arrows.png'

export const PictureCard: React.FC<{ picture: PictureInfo, isRed?: boolean }> = ({ picture, isRed = false }) => {

  const addToCart = () => {

  }

  return (
    <Containder className={isRed ? "red" : ""}>
      <ImageContainer>
        <MobilImage src={picture.mobilImageUrl} alt={picture.title} />
        <DesktopImage src={picture.imageUrl} alt={picture.title} />
        <HoverImageOverlay>
          <ScaleIcon src={ScaleArrows} alt="scale arrows" />
        </HoverImageOverlay>
      </ImageContainer>
      <InfoContainer>
        <Title>{picture.title}</Title>
        <Description></Description>
        <SaleContainer>
          <Price>{picture.price}</Price>
          <BorderedButton onClick={addToCart}>text</BorderedButton>
        </SaleContainer>
      </InfoContainer>
    </Containder>
  )
}
