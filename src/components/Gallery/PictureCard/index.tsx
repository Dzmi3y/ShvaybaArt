import React from 'react';
import { PictureInfo } from '../../../core/types/PictureInfo';
import { Description, Image, HoverImageOverlay, ImageContainer, InfoContainer, Price, SaleContainer, ScaleIcon, Title, Container } from './styles';
import { BorderedButton } from '../../Buttons/BorderedButton';
import ScaleArrows from '../../../assets/images/common/scale_arrows.png';
import { useTranslation } from "react-i18next";
import { addPictureToCart } from '../../../core/store/reducers/CartReducer';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';

export const PictureCard: React.FC<{ picture: PictureInfo, isRed?: boolean }> = ({ picture, isRed = false }) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation(['global']);
  const globalReducer = useAppSelector(state => state.globalReducer);

  const isMobil: boolean = window.innerWidth < 1458;
  const buttonText = isMobil ?
    t("buy", { ns: ['global'] }) + " " + picture.price + "$" :
    t("buy", { ns: ['global'] });
  const containerClass = (isRed ? "red " : "") + (picture.isHorizontal ? "Horizontal" : "");
  const saleContainerClass = picture.isItForSale ? "" : "hide";

  const addToCart = () => {
    dispatch(addPictureToCart(picture));
  }

  return (
    <Container className={containerClass}>
      <ImageContainer>
        <Image src={isMobil ? picture.mobilImageUrl : picture.imageUrl} alt={picture.title} />
         <HoverImageOverlay>
          <ScaleIcon src={ScaleArrows} alt="scale arrows" />
        </HoverImageOverlay> 
      </ImageContainer>
      <InfoContainer>
        <Title>{picture.title}</Title>
        <Description>{globalReducer.Lang === LangEnum.EN ? picture.description : picture.descriptionRu}</Description>
        <SaleContainer className={saleContainerClass}>
          <Price>{picture.price}$</Price>
          <BorderedButton onClick={addToCart}>{buttonText}</BorderedButton>
        </SaleContainer>
      </InfoContainer>
    </Container>
  )
}
