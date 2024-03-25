import React from 'react'
import { Card, Circle, Containder, DateText, MainText } from './styles'

export type CardAboutProps = {
    date: string,
    text: string,
    isSmall?: boolean,
    isRight?: boolean,
    imgUrl?: string
}

export const CardAbout: React.FC<CardAboutProps> = ({ date, text, isSmall = false, isRight = false, imgUrl = "" }) => {

    
    return (
        <Containder>
            <Card className={(isRight ? "right " : "") + (isSmall ? "small " : "")}>
                <Circle className={isRight ? "right " : ""}>
                    <DateText className={(isRight ? "right " : "")+ (Number(date)?"":"text") } >{date}</DateText>
                </Circle>

                <MainText className={(isRight ? "right " : "") + (isSmall ? "small " : "")}>{text}</MainText>
            </Card>
        </Containder>
    )
}
