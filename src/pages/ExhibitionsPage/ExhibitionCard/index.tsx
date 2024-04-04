import React from 'react';
import { Container, Title, DescriptionContainer, HeaderContainer, Status, ButtonContainer } from './styles';
import { DarkGradientButton } from '../../../components/Buttons/DarkGradientButton';
import { useTranslation } from "react-i18next";
import { useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';
import { Exhibition } from '../../../core/types/Exhibition';


export const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const { t } = useTranslation(['global']);
  const globalReducer = useAppSelector(state => state.globalReducer);

  const bookTicket = () => {

  }

  const date = `${t("from", { ns: ['global'] })} ${exhibition.from} ${t("to", { ns: ['global'] })} ${exhibition.to}`;
  const address = globalReducer.Lang === LangEnum.EN ? exhibition.address : exhibition.addressRu;
  const status = exhibition.itIsNow ? t("now", { ns: ['global'] }) : t("will_be", { ns: ['global'] });

  return (<Container style={{ backgroundImage: `url(${exhibition.image})` }}>
    <HeaderContainer>
      <Status>{status}</Status>
      <ButtonContainer>
        <DarkGradientButton onClick={bookTicket}>{t("book_ticket", { ns: ['global'] })}</DarkGradientButton>
      </ButtonContainer>
    </HeaderContainer>
    <Title>{exhibition.title}</Title>
    <DescriptionContainer>
      <div>{date}</div>
      <div>{address}</div>
    </DescriptionContainer>
  </Container>
  )
}
