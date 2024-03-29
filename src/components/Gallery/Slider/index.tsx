import React, { useEffect, useRef, useState } from 'react';
import {
    BackgroiundImageContainer, BottomContainer, Close, Container, ControlsContainer, DarkEffectDiv, Description, HeadContainer,
    Image,
    ImageContainer,
    LeftImgControl, MainContainer, Minus, Modal, Play, Plus, Price, RightImgControl,
    Stop, Title, TitleContainer
} from './styles';
import { PictureInfo } from '../../../core/types/PictureInfo';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';
import { ButtonContainer } from '../styles';
import { BorderedButton, SizeEnum } from '../../Buttons/BorderedButton';
import { useTranslation } from "react-i18next";
import { addPictureToCart } from '../../../core/store/reducers/CartReducer';

export type SlidedrProps = {
    toggleSlider: (isVisible: boolean, currentPicture?: PictureInfo) => void,
    isVisible: boolean,
    currentPicture: PictureInfo,
    isRed?: boolean,
}

export const Slider: React.FC<SlidedrProps> = ({ toggleSlider, isVisible, currentPicture, isRed = false }) => {
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();
    const [sliderIsVisible, setSliderIsVisible] = useState(false); 
    const { t } = useTranslation(['global']);

    const addToCart = () => {
        dispatch(addPictureToCart(currentPicture));
    }

    const modalEl = useRef<HTMLInputElement>(null);

    const closeSlider = ()=>{
        toggleSlider(false);
    }


    useEffect(() => {
        const onClick = (e: any) => {
            if (modalEl.current) {
                const isOutsideClick = !modalEl.current.contains(e.target);
                if (isOutsideClick && sliderIsVisible) {
                    toggleSlider(false);
                }
            }
        }

        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, [toggleSlider,sliderIsVisible]);

    useEffect(()=>{
        setSliderIsVisible(isVisible);
    },[isVisible]);

    return (
        <>
            {sliderIsVisible && (<Container>
                <Modal ref={modalEl}>
                    <HeadContainer>
                        <ControlsContainer>
                            <Minus />
                            <Plus />
                            <Stop />
                            <Play />
                        </ControlsContainer>
                        <TitleContainer>
                            <Description>
                                {globalReducer.Lang === LangEnum.EN
                                    ? currentPicture.description
                                    : currentPicture.descriptionRu}
                            </Description>
                            <Title>
                                {currentPicture.title}
                            </Title>
                        </TitleContainer>
                        <Close  onClick={closeSlider}/>
                    </HeadContainer>
                    <MainContainer>
                        <LeftImgControl />
                        <BackgroiundImageContainer>
                            <DarkEffectDiv>
                                <ImageContainer>
                                    <Image />
                                </ImageContainer>
                            </DarkEffectDiv>
                        </BackgroiundImageContainer>
                        <RightImgControl />
                    </MainContainer>
                    <BottomContainer>
                        <Price>{currentPicture.price}$</Price>
                        <ButtonContainer>
                            <BorderedButton onClick={addToCart} isRedButton={isRed} size={SizeEnum.Large}>{t("buy", { ns: ['global'] })}</BorderedButton>
                        </ButtonContainer>
                    </BottomContainer>
                </Modal>
            </Container>)}
        </>
    )
}
