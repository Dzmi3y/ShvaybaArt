import React, { useEffect, useRef, useState } from 'react';
import { ButtonContainer, Container } from './styles';
import { PictureInfo } from '../../core/types/PictureInfo';
import { PictureCard } from './PictureCard';
import { BorderedButton, SizeEnum } from '../Buttons/BorderedButton';
import { useTranslation } from "react-i18next";
import { Slider } from './Slider';

export const Gallery: React.FC<{ pictureList: PictureInfo[], isRed?: boolean }> = ({ pictureList, isRed = false }) => {
    const [shownImagesList, setShownImagesList] = useState<PictureInfo[]>([]);
    const [currentPicture, setCurrentPicture] = useState<PictureInfo>();
    const [sliderIsOpen, setSliderIsOpen] = useState<boolean>(false);
    const { t } = useTranslation(['global']);
    const isMobil: boolean = window.innerWidth < 1458;
    const imagesNumber = isMobil ? 3 : 4;
    const [numberOfShownImages, setNumberOfShownImages] = useState<number>(imagesNumber);

    const toggleSlider = (isVisible: boolean, picture?: PictureInfo) => {
        setSliderIsOpen(isVisible);
        if (picture) {
            setCurrentPicture(picture);
        }
    }

    const getSortedPictureList = (): PictureInfo[] => {
        let result: PictureInfo[] = [];
        const countInRow = isMobil ? 2 : 3;

        let horizontalPicturesList: PictureInfo[] = [];
        let verticalPicturesList: PictureInfo[] = [];

        pictureList.forEach((picture) => {
            if (picture.isHorizontal) {
                horizontalPicturesList.push(picture);
            } else {
                verticalPicturesList.push(picture);
            }
        });

        let lastHorisontalPuctureItem: number = 0;

        verticalPicturesList.forEach((picture, i) => {
            result.push(picture)

            if ((i + 1) % countInRow === 0) {
                let horizontalPictures = horizontalPicturesList[lastHorisontalPuctureItem++];
                if (horizontalPictures) {
                    result.push(horizontalPictures)
                }
            }

            if (i + 1 === verticalPicturesList.length) {
                if (horizontalPicturesList.length > lastHorisontalPuctureItem) {
                    result = [...result, ...horizontalPicturesList.slice(lastHorisontalPuctureItem, horizontalPicturesList.length)]
                }
            }

        })

        return result;
    }

    const sortedPictureList = useRef<PictureInfo[]>(getSortedPictureList());

    const showMore = () => {
        setNumberOfShownImages(numberOfShownImages + imagesNumber);
    }

    useEffect(() => {
        setShownImagesList(sortedPictureList.current.slice(0, numberOfShownImages));
    }, [numberOfShownImages]);

    return (
        <>
            <Container>
                {shownImagesList.map((picture, i) => (<PictureCard isRed={isRed} key={i} picture={picture} toggleSlider={toggleSlider} />))}
                {(sortedPictureList.current.length > numberOfShownImages) && (
                    <ButtonContainer>
                        <BorderedButton onClick={showMore} size={SizeEnum.Medium} isRedButton={isRed}>
                            {t("show_more", { ns: ['global'] })}
                        </BorderedButton>
                    </ButtonContainer>)}
            </Container>
            {currentPicture && (<Slider toggleSlider={toggleSlider}
                isVisible={sliderIsOpen}
                currentPicture={currentPicture} 
                allPicturesList={sortedPictureList.current}
                />)}
        </>
    )
}
