import React, { useRef, useState } from 'react'
import { Container, Info, Name, PaginationContainer, PaginationDot, Price, SliderContainer, TicketCard, Title } from './styles'
import { DarkGradientButton } from '../../../components/Buttons/DarkGradientButton'
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { Exhibition } from '../../../core/types/Exhibition';
import { addItemToCart } from '../../../core/store/reducers/CartReducer';
import LangEnum from '../../../core/enums/LangEnum';

export const Tickets: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
    const [dotsClasses, setDotsClasses] = useState<[string, string, string]>(["current", "next", "previous"]);
    const slider = useRef<HTMLDivElement>(null);
    const { t } = useTranslation(['global']);
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();

    const bookTicket = (priceId: string) => {
        dispatch(addItemToCart({ ...exhibition, selectedPriceId: priceId }));
    }

    const changeDots = (cardNumber: number) => {
        const next: number = (cardNumber + 1) % 3;
        const previous: number = (cardNumber + 2) % 3;


        let newClasses: [string, string, string] = ["", "", ""];
        newClasses[cardNumber] = "current ";
        newClasses[next] = "next ";
        newClasses[previous] = "previous ";

        setDotsClasses(newClasses);
    }

    const dotClick = (cardNumber: number) => {
        changeDots(cardNumber);

        if (slider.current) {
            const currentCard = (slider.current?.children.item(cardNumber) as HTMLDivElement);
            const x = currentCard.offsetLeft - slider.current?.offsetLeft;
            slider.current.scrollTo({ left: x })
        }
    }
    const onScroll = () => {

        if (slider.current) {
            const currentScroll = slider.current.scrollLeft;
            const scrollEnd = currentScroll + slider.current.offsetWidth;
            let cardNumber: number | null = null;

            let firstCard = slider.current?.children.item(0) as HTMLDivElement;
            let isFirst = (firstCard.offsetLeft - slider.current.offsetLeft) === currentScroll;

            if (isFirst) {
                cardNumber = 0;
            }
            
            for (let i = 1; (i < slider.current?.children.length && !isFirst); i++) {
                let card = slider.current?.children.item(i) as HTMLDivElement;
                let cardStart = card.offsetLeft - slider.current.offsetLeft;
                let cardEnd = cardStart + card.offsetWidth

                if (cardEnd === scrollEnd) {
                    cardNumber = i;
                }


            }

            if (cardNumber !== null) {
                changeDots(cardNumber);
            }


        }

    }

    return (
        <Container>
            <Title>{t("tickets", { ns: ['global'] })}</Title>
            <Info>{globalReducer.Lang === LangEnum.EN ? exhibition.priceInfo : exhibition.priceInfoRu}</Info>
            <SliderContainer onScroll={onScroll} ref={slider}>
                {exhibition.prices.map((ticket, i) => (
                    <TicketCard key={i} id={"card_" + i}>
                        <Name>{globalReducer.Lang === LangEnum.EN ? ticket.type : ticket.typeRu}</Name>
                        <Price>{ticket.price}$</Price>
                        <DarkGradientButton onClick={() => bookTicket(ticket.id)}>{t("book_ticket", { ns: ['global'] })}</DarkGradientButton>
                    </TicketCard>
                ))}
            </SliderContainer>
            <PaginationContainer>
                {exhibition.prices.map((_, i) => (<PaginationDot key={"card_" + i} onClick={() => { dotClick(i) }} className={dotsClasses[i]} />))}
            </PaginationContainer>
        </Container>
    )
}
