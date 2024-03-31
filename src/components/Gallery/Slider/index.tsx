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
    const [mouseIsDown, setMouseIsDown] = useState(false);
    const [lastCoordinats, setLastCoordinsts] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
    const { t } = useTranslation(['global']);
    const clientX = useRef<number>(0);
    const clientY = useRef<number>(0);
    const x = useRef<number>(0);
    const y = useRef<number>(0);
    const scale = useRef<number>(1);
    const image = useRef<HTMLImageElement>(null);

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

    const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseIsDown(true);
        clientX.current = e.clientX;
        clientY.current = e.clientY;
    }

    const onMouseUp = (e: any) => {
        setMouseIsDown(false);
        setLastCoordinsts({ x: x.current, y: y.current })
    }

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (mouseIsDown && isMouseInside(e)) {
            x.current = ((e.clientX + lastCoordinats.x) - clientX.current) / Number(scale.current.toFixed(2));
            y.current = ((e.clientY + lastCoordinats.y) - clientY.current) / Number(scale.current.toFixed(2));

            if (image.current) {
                image.current.style.transform = `translate(${x.current}px,${y.current}px)`;
            }
        }
    }

    const isMouseInside = (e: React.MouseEvent<HTMLDivElement>) => {
        if (modalEl.current) {
            const topBorder = e.clientY >= e.currentTarget.offsetTop + modalEl.current?.offsetTop;
            const leftBorder = e.clientX >= e.currentTarget.offsetLeft + modalEl.current?.offsetLeft;
            const bottomBorder = e.clientY <= e.currentTarget.offsetTop + e.currentTarget.offsetHeight + modalEl.current?.offsetTop;
            const rightBorder = e.clientX <= e.currentTarget.offsetLeft + e.currentTarget.offsetWidth + modalEl.current?.offsetLeft;
            return topBorder && leftBorder && bottomBorder && rightBorder;
        }
        return false;
    }

    const wheel = (e: React.WheelEvent) => {
        if (image.current) {
            const min = 0.2;
            const max = 4;
            const step = 0.2;

            if ((min < scale.current) && (scale.current < max)) {
                scale.current += (e.deltaY < 0) ? step : -step;
            }

            if ((min >= scale.current) && (e.deltaY < 0)) {
                scale.current += step;
            }

            if ((max <= scale.current) && (e.deltaY > 0)) {
                scale.current -= step;
            }

            image.current.style.scale = scale.current.toString();
        }
    }

    useEffect(() => {
        scale.current = 1;
        setLastCoordinsts({ x: 0, y: 0 });
        if (image.current) {
            image.current.style.transform = `translate(${0}px,${0}px)`;
            image.current.style.scale = scale.current.toString();
        }
        
        const pictureNumber = allPicturesList.indexOf(currentPicture);
        setIsFirstPicture(pictureNumber === 0);
        setIsLastPicture(pictureNumber + 1 === allPicturesList.length);

    }, [currentPicture, isVisible, allPicturesList]);

    useEffect(() => {
        document.addEventListener('mouseup', onMouseUp);
        return () => document.removeEventListener('mousup', onMouseUp);
    }, []);



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
                            {!isFirstPicture && (<LeftImgControl onClick={previousPicture} />)}
                        </LeftImgControlContainer>
                        <BackgroundImageContainer style={{ backgroundImage: `url(${currentPicture.imageUrl})` }} >
                            <DarkEffectDiv onMouseMove={mouseMove} onMouseDown={mouseDown} onWheel={wheel} >
                                <ImageContainer>
                                    <Image src={currentPicture.bigImageUrl} ref={image} draggable="false" />
                                </ImageContainer>
                            </DarkEffectDiv>
                        </BackgroundImageContainer>
                        <RightImgControlContainer>
                            {!isLastPicture && (<RightImgControl onClick={nextPicture} />)}
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
