import React, { useState } from 'react';
import { CardContainer, Container, ImgCard, PaginationContainer, PaginationDot } from './styles';




export const ShortGallery: React.FC<{ invert?: boolean, imgList: [string, string, string] }> = ({ imgList, invert }) => {
  const [dotsClasses, setDotsClasses] = useState<[string, string, string]>(["current", "next", "previous"]);
  const [previousSelectedCard, setPreviousSelectedCard] = useState<number>(0);


  const nextCard = () => {
    const next: number = (previousSelectedCard + 1) % 3;
    dotClick(next);
  }

  const previousCard = () => {
    const previous: number = (previousSelectedCard + 2) % 3;
    dotClick(previous);

  }

  const dotClick = (cardNumber: number) => {
    const next: number = (cardNumber + 1) % 3;
    const previous: number = (cardNumber + 2) % 3;

    const rotationAnimation = previousSelectedCard == next ? "left" : "right";

    let newClasses: [string, string, string] = ["", "", ""];
    newClasses[cardNumber] = "current " + rotationAnimation;
    newClasses[next] = "next " + rotationAnimation;
    newClasses[previous] = "previous " + rotationAnimation;

    setDotsClasses(newClasses);
    setPreviousSelectedCard(cardNumber);
  }

  return (
    <Container>
      <CardContainer className={invert ? "invert" : ""}>
        {imgList.map((imgSrc, i) => (<ImgCard key={"card_" + i} src={imgSrc} className={dotsClasses[i]}/>))}
      </CardContainer>
      <PaginationContainer>
        {imgList.map((_, i) => (<PaginationDot key={"card_" + i} onClick={() => { dotClick(i) }} className={dotsClasses[i]} />))}
      </PaginationContainer>
    </Container>

  )
}
