import React from 'react'
import { Container } from './styles'
import { PictureInfo } from '../../core/types/PictureInfo'
import { PictureCard } from './PictureCard'

export const Gallery: React.FC<{ pictureList: PictureInfo[], isRed?: boolean }> = ({ pictureList, isRed = false }) => {

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

    const sortedPictureList = getSortedPictureList();



    return (
        <Container>
            {sortedPictureList.map((picture, i) => (<PictureCard isRed={isRed} key={i} picture={picture} />))}
        </Container>
    )
}
