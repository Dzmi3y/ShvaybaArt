import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { BackgroundImageContainer, Image, DarkEffectDiv, ImageContainer, } from './styles'
import { PictureInfo } from '../../../../core/types/PictureInfo';

export type SliderCurrentImageProps = {
    currentPicture: PictureInfo,
    setIsFirstPicture: React.Dispatch<React.SetStateAction<boolean>>,
    setIsLastPicture: React.Dispatch<React.SetStateAction<boolean>>,
    scale: MutableRefObject<number>,
    modalEl: React.RefObject<HTMLInputElement>,
    isVisible: boolean,
    allPicturesList: PictureInfo[],
    scaleImageDelegate: (scaleImageEvent: (e: boolean) => void) => void,
    previousPicture: () => void,
    nextPicture: () => void
};

type coordinats = {
    x: number,
    y: number
}

export const SliderCurrentImage: React.FC<SliderCurrentImageProps> = ({ currentPicture, setIsFirstPicture, setIsLastPicture,
    scale, modalEl, isVisible, allPicturesList, scaleImageDelegate, previousPicture, nextPicture }) => {
    const [mouseIsDown, setMouseIsDown] = useState(false);
    const [lastCoordinats, setLastCoordinsts] = useState<coordinats>({ x: 0, y: 0 })
    const [previousDistance, setPreviousDistance] = useState<number>()
    const [previousSwipeX, setPreviousSwipeX] = useState<number>()
    const clientX = useRef<number>(0);
    const clientY = useRef<number>(0);
    const x = useRef<number>(0);
    const y = useRef<number>(0);
    const image = useRef<HTMLImageElement>(null);

    const mouseMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (mouseIsDown && isMouseInside(e)) {
            const { x: eClientX, y: eClientY } = getEventCoordinats(e);
            x.current = ((eClientX + lastCoordinats.x) - clientX.current) / Number(scale.current.toFixed(2));
            y.current = ((eClientY + lastCoordinats.y) - clientY.current) / Number(scale.current.toFixed(2));

            if (image.current) {
                image.current.style.transform = `translate(${x.current}px,${y.current}px)`;
            }
        }
    }


    const getEventCoordinats = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): coordinats => {
        let eClientX = 0;
        let eClientY = 0;
        if (e.nativeEvent instanceof TouchEvent) {
            eClientX = (e).nativeEvent.touches[0].clientX;
            eClientY = (e).nativeEvent.touches[0].clientY;
        }

        if (e.nativeEvent instanceof MouseEvent) {
            eClientX = (e).nativeEvent.clientX;
            eClientY = (e).nativeEvent.clientY;
        }
        return { x: eClientX, y: eClientY }
    }

    const mouseDown = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        setMouseIsDown(true);


        const { x: eClientX, y: eClientY } = getEventCoordinats(e);
        clientX.current = eClientX;
        clientY.current = eClientY;
    }

    const onMouseUp = (e: any) => {
        setMouseIsDown(false);
        setLastCoordinsts({ x: x.current, y: y.current })
    }

    const isMouseInside = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (modalEl.current) {
            const { x: eClientX, y: eClientY } = getEventCoordinats(e);
            const topBorder = eClientY >= e.currentTarget.offsetTop + modalEl.current?.offsetTop;
            const leftBorder = eClientX >= e.currentTarget.offsetLeft + modalEl.current?.offsetLeft;
            const bottomBorder = eClientY <= e.currentTarget.offsetTop + e.currentTarget.offsetHeight + modalEl.current?.offsetTop;
            const rightBorder = eClientX <= e.currentTarget.offsetLeft + e.currentTarget.offsetWidth + modalEl.current?.offsetLeft;
            return topBorder && leftBorder && bottomBorder && rightBorder;
        }
        return false;
    }

    const wheel = (e: React.WheelEvent) => {
        scaleImage(e.deltaY < 0);
    }


    const scaleImage = (isIncrease: boolean) => {
        if (image.current) {
            const min = 0.2;
            const max = 4;
            const step = 0.2;

            if ((min < scale.current) && (scale.current < max)) {
                scale.current += isIncrease ? step : -step;
            }

            if ((min >= scale.current) && isIncrease) {
                scale.current += step;
            }

            if ((max <= scale.current) && !isIncrease) {
                scale.current -= step;
            }

            image.current.style.scale = scale.current.toString();
        }
    }

    scaleImageDelegate(scaleImage);


    const mobilScaleImage = (distance: number) => {
        let newScale = 0;
        if (previousDistance) {
            if (previousDistance < distance) {
                newScale = Math.min(4, scale.current + (distance - 100) / 10000);
            } else {
                newScale = Math.max(0.2, scale.current - (distance - 100) / 10000);
            }
        }

        if (image.current) {
            image.current.style.scale = scale.current.toString();
        }
        scale.current = newScale;
        setPreviousDistance(distance);
    }


    const getDistance = (touches: React.TouchList): number => {
        const finger1 = touches[0];
        const finger2 = touches[1];

        if (!finger1 || !finger2) return 0;
        const distance = Math.sqrt(
            (finger1.clientX - finger2.clientX) ** 2 +
            (finger1.clientY - finger2.clientY) ** 2
        );
        return distance;

    }

    const swipe = (isRight: boolean) => {
        if (isRight) {
            nextPicture();
        } else {
            previousPicture();
        }

    }


    const touchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2) {
            const distance = getDistance(e.touches);
            setPreviousDistance(distance);
        }
        if (e.touches.length === 1) {
            setPreviousSwipeX(e.touches[0].clientX);
            mouseDown(e)
        }
    }

    const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (e.touches.length === 2) {
            const distance = getDistance(e.touches)
            mobilScaleImage(distance);
        }

        if (e.touches.length === 1) {
            const swipeTrigger = 20
            if (previousSwipeX) {
                let deltaX = previousSwipeX - e.touches[0].clientX;
                if (Math.abs(deltaX) > swipeTrigger) {
                    swipe(deltaX > 0);
                    setPreviousSwipeX(undefined);
                } else {
                    mouseMove(e);
                    setPreviousSwipeX(e.touches[0].clientX);
                }
            }
            
        }
    }

    const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        setPreviousDistance(undefined);
        setPreviousSwipeX(undefined);
        onMouseUp(e);
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

    }, [currentPicture, isVisible, allPicturesList, scale, setIsFirstPicture, setIsLastPicture]);

    useEffect(() => {
        document.addEventListener('mouseup', onMouseUp);
        return () => document.removeEventListener('mousup', onMouseUp);
    }, []);

    return (
        <BackgroundImageContainer style={{ backgroundImage: `url(${currentPicture.imageUrl})` }} >
            <DarkEffectDiv onMouseMove={mouseMove} onMouseDown={mouseDown} onWheel={wheel} onTouchStart={touchStart} onTouchMove={touchMove} onTouchEnd={touchEnd} >
                <ImageContainer>
                    <Image src={currentPicture.bigImageUrl} ref={image} draggable="false"
                    />
                </ImageContainer>
            </DarkEffectDiv>
        </BackgroundImageContainer>
    )
}
