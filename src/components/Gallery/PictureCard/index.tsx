import React from 'react';
import { PictureInfo } from '../../../core/types/PictureInfo';
import { Description, Image, HoverImageOverlay, ImageContainer, InfoContainer, Price, SaleContainer, ScaleIcon, Title, Container, ButtonContainer } from './styles';
import { BorderedButton } from '../../Buttons/BorderedButton';
import ScaleArrows from '../../../assets/images/common/scale_arrows.png';
import { useTranslation } from "react-i18next";
import { addItemToCart } from '../../../core/store/reducers/CartReducer';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';

export type PictureCardProps = {
  picture: PictureInfo,
  isRed?: boolean,
  toggleSlider: (isVisible: boolean, currentPicture?: PictureInfo) => void
}

export const PictureCard: React.FC<PictureCardProps> = ({ picture, toggleSlider, isRed = false }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['global']);
  const globalReducer = useAppSelector(state => state.globalReducer);

  const isMobile: boolean = window.innerWidth < 1458;
  const buttonText = isMobile ?
    t("buy", { ns: ['global'] }) + " " + picture.price + "$" :
    t("buy", { ns: ['global'] });
  const containerClass = (isRed ? "red " : "") + (picture.isHorizontal ? "horizontal " : "");
  const saleContainerClass = picture.isItForSale ? "" : "hide ";

  const addToCart = () => {
    dispatch(addItemToCart(picture));
  }

  return (
    <Container className={containerClass}>
      <ImageContainer onClick={() => toggleSlider(true, picture)}>
        <Image src={isMobile ? picture.mobilImageUrl : picture.imageUrl} alt={picture.title} />
        <HoverImageOverlay>
          <ScaleIcon src={ScaleArrows} alt="scale arrows" />
        </HoverImageOverlay>
      </ImageContainer>
      <InfoContainer>
        <Title>{picture.title}</Title>
        <Description>{globalReducer.Lang === LangEnum.EN ? picture.description : picture.descriptionRu}</Description>
        {picture.isItForSale && (<SaleContainer className={saleContainerClass}>
          <Price>{picture.price}$ </Price>
          <ButtonContainer>
            <BorderedButton isRedButton={isRed} onClick={addToCart}>{buttonText}</BorderedButton>
          </ButtonContainer>
        </SaleContainer>)}
      </InfoContainer>
    </Container>
  )
}
