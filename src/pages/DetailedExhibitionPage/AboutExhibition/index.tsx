import React from 'react'
import { Container, Introduction, MainText, StyledImage, TextContainer, Title, InfoContainer } from './styles'
import { AboutExhibition as AboutExhibitionData } from '../../../core/types/Exhibition'
import { useTranslation } from "react-i18next";
import { useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';

export const AboutExhibition: React.FC<{ aboutExhibition: AboutExhibitionData }> = ({ aboutExhibition }) => {
    const { t } = useTranslation(['global']);
    const globalReducer = useAppSelector(state => state.globalReducer);
    const intro = globalReducer.Lang === LangEnum.RU ? aboutExhibition.titleRu : aboutExhibition.title;
    const mainText = globalReducer.Lang === LangEnum.RU ? aboutExhibition.textRu : aboutExhibition.text;

    return (
        <Container>
            <Title>{t("aboutExhibition", { ns: ['global'] })}</Title>
            <InfoContainer>
                <StyledImage src={aboutExhibition.image} />
                <TextContainer>
                    <Introduction>{intro}</Introduction>
                    <MainText>{mainText}</MainText>
                </TextContainer>
            </InfoContainer>
        </Container>
    )
}
