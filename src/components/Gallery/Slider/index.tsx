import React, { useEffect, useRef, useState } from 'react';
import {
    BottomContainer, Close, Container, ControlsContainer, Description, HeadContainer,
    LeftImgControl, LeftImgControlContainer, MainContainer, Minus, MobilTitle, Modal, ModalInfo, Play, Plus, Price, RightImgControl,
    RightImgControlContainer,
    SlideshowControlsImgContainer,
    Stop, Title, TitleContainer,
    ZoomImgContainer
} from './styles';
import { PictureInfo } from '../../../core/types/PictureInfo';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';
import { ButtonContainer } from '../styles';
import { BorderedButton, SizeEnum } from '../../Buttons/BorderedButton';
import { useTranslation } from "react-i18next";
import { addPictureToCart } from '../../../core/store/reducers/CartReducer';
import { SliderCurrentImage } from './SliderCurrentImage';

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
    const [isSlideshowPlaying, setIsSlideshowPlaying] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout>();
    const { t } = useTranslation(['global',"gallery"]);
    const scale = useRef<number>(1);


    const addToCart = () => {
        dispatch(addPictureToCart(currentPicture));
    }

    const modalEl = useRef<HTMLInputElement>(null);

    let scaleImage: (e: boolean) => void;

    const scaleImageDelegate = (scaleImageEvent: (e: boolean) => void) => {
        scaleImage = scaleImageEvent;
    }

    const nextPicture = () => {
        if (!isLastPicture) {
            const pictureNumber = allPicturesList.indexOf(currentPicture);
            toggleSlider(true, allPicturesList[pictureNumber + 1]);
            checkTimer();
        }
    };
    const previousPicture = () => {
        if (!isFirstPicture) {
            const pictureNumber = allPicturesList.indexOf(currentPicture);
            toggleSlider(true, allPicturesList[pictureNumber - 1]);
            checkTimer();
        }
    };

    const closeSlider = () => {
        toggleSlider(false);
        if (isSlideshowPlaying) {
            stopSlideshow();
        }
    }


    const playSlideshow = () => {
        setIsSlideshowPlaying(true);
        startTimer();
    }

    const stopSlideshow = () => {
        clearTimeout(timerId);
        setIsSlideshowPlaying(false);
        setTimerId(undefined);
    }


    const startTimer = () => {
        if (isLastPicture) {
            stopSlideshow();
            return;
        }

        if (timerId) {
            clearTimeout(timerId);
        }
    }

    const checkTimer = () => {
        if (isSlideshowPlaying) {
            clearTimeout(timerId);
            setTimerId(undefined);
        }

    }

    useEffect(() => {
        const pictureNumber = allPicturesList.indexOf(currentPicture);
        const isLast = pictureNumber + 1 === allPicturesList.length
        if (!isLast) {

            const nextSlide = () => {
                const pictureNumber = allPicturesList.indexOf(currentPicture);
                toggleSlider(true, allPicturesList[pictureNumber + 1]);
            }

            if (isSlideshowPlaying) {
                setTimerId(undefined);
                setTimerId(setTimeout(nextSlide, 4000));
            }
        } else {
            setIsSlideshowPlaying(false);
        }


    }, [currentPicture, isSlideshowPlaying, allPicturesList, toggleSlider]);

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
        scale.current = 1;
        document.body.style.overflow = isVisible ? 'hidden' : '';
    }, [isVisible]);
    return (
        <>
            {sliderIsVisible && (<Container>
                <Modal ref={modalEl}>
                    <HeadContainer>
                        <ControlsContainer>
                            <ZoomImgContainer>
                                <Minus onClick={() => { if (scaleImage) { scaleImage(false) } }} />
                                <ModalInfo>{t("zoomOutInfo", { ns: ['gallery'] })}</ModalInfo>
                            </ZoomImgContainer>
                            <ZoomImgContainer>
                                <Plus onClick={() => { if (scaleImage) { scaleImage(true) } }} />
                                <ModalInfo>{t("zoomInInfo", { ns: ['gallery'] })}</ModalInfo>
                            </ZoomImgContainer>
                            <SlideshowControlsImgContainer style={{ display: isSlideshowPlaying ? "" : "none" }}>
                                <Stop style={{ display: isSlideshowPlaying ? "" : "none" }} onClick={stopSlideshow} />
                                <ModalInfo>{t("stopInfo", { ns: ['gallery'] })}</ModalInfo>
                            </SlideshowControlsImgContainer>
                            <SlideshowControlsImgContainer style={{ display: isSlideshowPlaying ? "none" : "" }} >
                                <Play style={{ display: isSlideshowPlaying ? "none" : "" }} onClick={playSlideshow} />
                                <ModalInfo>{t("playInfo", { ns: ['gallery'] })}</ModalInfo>
                            </SlideshowControlsImgContainer>
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
                            {!isFirstPicture && (<LeftImgControl onClick={previousPicture} />)}
                        </LeftImgControlContainer>
                        <SliderCurrentImage allPicturesList={allPicturesList} currentPicture={currentPicture}
                            isVisible={isVisible} modalEl={modalEl} scale={scale} setIsFirstPicture={setIsFirstPicture}
                            setIsLastPicture={setIsLastPicture} scaleImageDelegate={scaleImageDelegate}
                            previousPicture={previousPicture} nextPicture={nextPicture} />
                        <RightImgControlContainer>
                            {!isLastPicture && (<RightImgControl onClick={nextPicture} />)}
                        </RightImgControlContainer>
                    </MainContainer>
                    <BottomContainer>
                        <MobilTitle>
                            {currentPicture.title}
                        </MobilTitle>
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
