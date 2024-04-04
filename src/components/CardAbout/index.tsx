import React from 'react';
import { Card, Circle, Containder, DateText, MainText, Image } from './styles';

export type CardAboutProps = {
    date: string,
    text: string,
    isSmall?: boolean,
    isRight?: boolean,
    imgUrl?: string,
    isMobile: boolean,
}

export const CardAbout: React.FC<CardAboutProps> = ({ date, text, isMobile, isSmall = false, isRight = false, imgUrl = "" }) => {
    const rightClassName: string = isRight ? "right " : "";
    const smallClassName: string = isSmall ? "small " : "";
    const textCalssName: string = Number(date) ? "" : "text ";
    const urlIsNotEmpty: boolean = !!imgUrl && (imgUrl !== "");
    const whiteTextClassName: string = (isMobile && urlIsNotEmpty) ? "white-text " : "";
    const cardImgStyle: React.CSSProperties | undefined = isMobile ? { backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" } : undefined;
    
    return (
        <Containder>
            <Card className={rightClassName + smallClassName} style={cardImgStyle}>
                <Circle className={rightClassName}>
                    <DateText className={rightClassName + textCalssName} >{date}</DateText>
                </Circle>

                <MainText className={rightClassName + smallClassName + whiteTextClassName}>{text}</MainText>
            </Card>
            {(!isMobile && urlIsNotEmpty) && (<Image src={imgUrl} />)}
        </Containder>
    )
}
