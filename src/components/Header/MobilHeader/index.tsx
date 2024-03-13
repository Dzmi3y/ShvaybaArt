import React, { useEffect, useState } from 'react';

import { ReactComponent as Cart } from "../../../assets/images/cart.svg";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { Burger, BurgerLine, CartCount, CartWrapper, Container, LinkWrapper, Title, Wrapper } from './styles';
import LangEnum from '../../../core/enums/LangEnum';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { changeLang } from '../../../core/store/reducers/GlobalReducer';

export const MobilHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

  const [headerTheme, setHeaderTheme] = useState<string>("");
  const location = useLocation();
  const globalReducer = useAppSelector(state => state.globalReducer);
  const dispatch = useAppDispatch();

  const burgerClick = () => {
    setMenuIsOpen(!menuIsOpen);
  }

  const switchLang=()=>{
      const newLang = (globalReducer.Lang === LangEnum.RU) ? LangEnum.EN: LangEnum.RU;
      dispatch(changeLang(newLang));
  }

  useEffect(() => {
      switch (location.pathname) {
          case RouteNamesEnum.TAMARA_DEMENTJEVA.toString():
              setHeaderTheme("red");
              break;

          default:
              setHeaderTheme("");
      }
  }, [location.pathname])

  return (
    <Container className={headerTheme}>
      <Wrapper>
        <Burger className={(menuIsOpen ? "open" : "close") +" "+ headerTheme} onClick={burgerClick}>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
          <BurgerLine></BurgerLine>
        </Burger>
        <Title className='logo'>Lol kek cheburek</Title>
        <LinkWrapper to={RouteNamesEnum.ORDER}>
          <CartWrapper className={headerTheme}>
            <Cart />
            <CartCount className={globalReducer.CartCounter>0?"":"hide"}>{globalReducer.CartCounter}</CartCount>
          </CartWrapper>
        </LinkWrapper>
      </Wrapper>
    </Container>
  )
}
