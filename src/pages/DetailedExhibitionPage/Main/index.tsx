import React from 'react';
import { BackImage, Container, Date, ExhibitionName, HeadContainer, Title, WhiteContainer } from './styles';
import { Exhibition } from '../../../core/types/Exhibition';
import { useTranslation } from "react-i18next";
import { DarkGradientButton } from '../../../components/Buttons/DarkGradientButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../core/hooks';
import { addItemToCart } from '../../../core/store/reducers/CartReducer';

export const Main: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
    const { t } = useTranslation(['global']);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const bookTicket = () => {
        dispatch(addItemToCart({ ...exhibition, selectedPriceId: exhibition.prices[0].id }));
    }

    const back = () => {
        navigate(-1);
    };


    const convertToShortDate = (dateString: string): string => {
        const [d, m] = dateString.split(".");
        return `${d}.${m}`;
    }

    return (<Container style={{ backgroundImage: `url(${exhibition.image})` }}>
        <WhiteContainer>
            <HeadContainer>
                <BackImage onClick={back} />
            </HeadContainer>
            <Title>{t("exhibition", { ns: ['global'] })}</Title>
            <ExhibitionName>{exhibition.title}</ExhibitionName>
            <Date>{t("from", { ns: ['global'] })} {convertToShortDate(exhibition.from)} {t("to", { ns: ['global'] })} {convertToShortDate(exhibition.to)}</Date>
            <DarkGradientButton onClick={bookTicket}> {t("book_ticket", { ns: ['global'] })} </DarkGradientButton>
        </WhiteContainer>
    </Container>
    )
}
