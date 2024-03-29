import React, { useEffect, useRef, useState } from 'react';
import {
    BackgroundImageContainer, BottomContainer, Close, Container, ControlsContainer, DarkEffectDiv, Description, HeadContainer,
    Image,
    ImageContainer,
    LeftImgControl, LeftImgControlContainer, MainContainer, Minus, Modal, Play, Plus, Price, RightImgControl,
    RightImgControlContainer,
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
    allPicturesList: PictureInfo[]
}

export const Slider: React.FC<SlidedrProps> = ({ toggleSlider, isVisible, currentPicture, isRed = false, allPicturesList }) => {
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();
    const [sliderIsVisible, setSliderIsVisible] = useState(false);
    const [isFirstPicture, setIsFirstPicture] = useState(true);
    const [isLastPicture, setIsLastPicture] = useState(true);
    const { t } = useTranslation(['global']);

    const addToCart = () => {
        dispatch(addPictureToCart(currentPicture));
    }

    const modalEl = useRef<HTMLInputElement>(null);

    const nextPicture = () => {
        const pictureNumber = allPicturesList.indexOf(currentPicture);
        toggleSlider(true, allPicturesList[pictureNumber + 1]);
    };
    const previousPicture = () => {
        const pictureNumber = allPicturesList.indexOf(currentPicture);
        toggleSlider(true, allPicturesList[pictureNumber - 1]);
    };

    const closeSlider = () => {
        toggleSlider(false);
    }

    useEffect(() => {

        const pictureNumber = allPicturesList.indexOf(currentPicture);
        setIsFirstPicture(pictureNumber === 0);
        setIsLastPicture(pictureNumber + 1 === allPicturesList.length);

    }, [currentPicture, isVisible, allPicturesList]);


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
    }, [toggleSlider, sliderIsVisible]);

    useEffect(() => {
        setSliderIsVisible(isVisible);
    }, [isVisible]);

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
                        <Close onClick={closeSlider} />
                    </HeadContainer>
                    <MainContainer>
                        <LeftImgControlContainer>
                            {!isFirstPicture && (<LeftImgControl onClick={previousPicture}/>)}
                        </LeftImgControlContainer>
                        <BackgroundImageContainer style={{ backgroundImage: `url(${currentPicture.imageUrl})` }} >
                            <DarkEffectDiv>
                                <ImageContainer>
                                    <Image src={currentPicture.bigImageUrl} />
                                </ImageContainer>
                            </DarkEffectDiv>
                        </BackgroundImageContainer>
                        <RightImgControlContainer>
                            {!isLastPicture && (<RightImgControl onClick={nextPicture}/>)}
                        </RightImgControlContainer>
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
