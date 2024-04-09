import React from 'react';
import { Container, Title, DescriptionContainer, HeaderContainer, Status, ButtonContainer, MobileDescriptionContainer, MobileButtonContainer } from './styles';
import { DarkGradientButton } from '../../../components/Buttons/DarkGradientButton';
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import LangEnum from '../../../core/enums/LangEnum';
import { Exhibition } from '../../../core/types/Exhibition';
import { createSearchParams, useNavigate } from 'react-router-dom';
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { addItemToCart } from '../../../core/store/reducers/CartReducer';


export const ExhibitionCard: React.FC<{ exhibition: Exhibition }> = ({ exhibition }) => {
  const { t } = useTranslation(['global']);
  const navigate = useNavigate();
  const globalReducer = useAppSelector(state => state.globalReducer);
  const dispatch = useAppDispatch();

  const bookTicket = () => {
    dispatch(addItemToCart({ ...exhibition, selectedPriceId: exhibition.prices[0].id }));
  }

  const goToDetail = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    if ((e.target as HTMLElement).nodeName !== "BUTTON" ) {
      navigate({ pathname: RouteNamesEnum.DETAILED_EXHIBITION_PAGE, search: createSearchParams({ name: exhibition.title }).toString() })
    }
  }

  const date = `${t("from", { ns: ['global'] })} ${exhibition.from} ${t("to", { ns: ['global'] })} ${exhibition.to}`;
  const address = globalReducer.Lang === LangEnum.EN ? exhibition.address : exhibition.addressRu;
  const status = exhibition.itIsNow ? t("now", { ns: ['global'] }) : t("will_be", { ns: ['global'] });
  const isMobile: boolean = window.innerWidth < 1458;

  return (<Container onClick={(e) => goToDetail(e)} style={{ backgroundImage: `url(${isMobile ? exhibition.mobilImage : exhibition.image})` }}>
    <HeaderContainer>
      <Status>{status}</Status>
      <ButtonContainer>
        <DarkGradientButton onClick={bookTicket}>{t("book_ticket", { ns: ['global'] })}</DarkGradientButton>
      </ButtonContainer>
      <MobileDescriptionContainer>
        <div>{address}</div>
        <div>{date}</div>
      </MobileDescriptionContainer>
    </HeaderContainer>
    <Title>{exhibition.title}</Title>
    <DescriptionContainer>
      <div>{date}</div>
      <div>{address}</div>
    </DescriptionContainer>
    <MobileButtonContainer>
      <DarkGradientButton onClick={bookTicket}>{t("book_ticket", { ns: ['global'] })}</DarkGradientButton>
    </MobileButtonContainer>
  </Container>
  )
}
