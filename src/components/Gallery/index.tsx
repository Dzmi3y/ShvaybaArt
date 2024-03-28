import React, { useEffect, useRef, useState } from 'react';
import { ButtonContainer, Container } from './styles';
import { PictureInfo } from '../../core/types/PictureInfo';
import { PictureCard } from './PictureCard';
import { BorderedButton, SizeEnum } from '../Buttons/BorderedButton';
import { useTranslation } from "react-i18next";

export const Gallery: React.FC<{ pictureList: PictureInfo[], isRed?: boolean }> = ({ pictureList, isRed = false }) => {
    const [numberOfShownImages, setNumberOfShownImages] = useState<number>(4);
    const [shownImagesList, setShownImagesList] = useState<PictureInfo[]>([]);
    const { t } = useTranslation(['global']);
    const isMobil: boolean = window.innerWidth < 1458;

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
        setNumberOfShownImages(numberOfShownImages + 4);
    }

    useEffect(() => {
        setShownImagesList(sortedPictureList.current.slice(0, numberOfShownImages));
    }, [numberOfShownImages]);

    return (
        <Container>
            {shownImagesList.map((picture, i) => (<PictureCard isRed={isRed} key={i} picture={picture} />))}
            {(sortedPictureList.current.length > numberOfShownImages) && (
                <ButtonContainer>
                    <BorderedButton onClick={showMore} size={SizeEnum.Medium} isRedButton={isRed}>
                        {t("show_more", { ns: ['global'] })}
                    </BorderedButton>
                </ButtonContainer>)}
        </Container>
    )
}
