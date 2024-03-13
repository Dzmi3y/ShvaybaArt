import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Cart } from "../../../assets/images/cart.svg";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { Burger, BurgerLine, CartCount, CartWrapper, Container, LangSwitcher, LinkWrapper, Menu, Modal, OrderLinkWrapper, RootContainer, Title, Wrapper } from './styles';
import LangEnum from '../../../core/enums/LangEnum';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { changeLang } from '../../../core/store/reducers/GlobalReducer';

export const MobilHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [headerTheme, setHeaderTheme] = useState<string>("");
  const [isFirstCall, setIsFirstCall] = useState<boolean>(true);
  const location = useLocation();
  const globalReducer = useAppSelector(state => state.globalReducer);
  const dispatch = useAppDispatch();


  const burgerClick = () => {
    setMenuIsOpen(!menuIsOpen);
    setIsFirstCall(false);
  }

  const switchLang = () => {
    const newLang = (globalReducer.Lang === LangEnum.RU) ? LangEnum.EN : LangEnum.RU;
    dispatch(changeLang(newLang));
  }

  const getClasses = (name: RouteNamesEnum) => {
    if (RouteNamesEnum.ABOUT === name) {
      return location.pathname + location.hash === RouteNamesEnum.ABOUT ? "selected" : "";
    }

    if (RouteNamesEnum.HOME === name) {

      return (location.pathname === RouteNamesEnum.HOME) && (location.pathname + location.hash !== RouteNamesEnum.ABOUT)
        ? "logo selected" : "logo";
    }
    return location.pathname === name ? "selected" : ""
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

  const menuEl = useRef<HTMLInputElement>(null);
  const burgerEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onClick = (e: any) => {
      if (burgerEl.current && menuEl.current) {
        const isOutsideClick = !menuEl.current.contains(e.target);
        const isNotBurgerClick= !burgerEl.current.contains(e.target);
          if(isOutsideClick && isNotBurgerClick ){
            setMenuIsOpen(false);
          }
      }
    }
    
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);

  },[]);

  


  return (
    <RootContainer className={headerTheme}>
      <Container>
        <Wrapper>
          <Burger ref={burgerEl} className={(menuIsOpen ? "open" : "close") + " " + headerTheme} onClick={burgerClick}>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
          </Burger>
          <Title className='logo'>Lol kek cheburek</Title>
          <OrderLinkWrapper to={RouteNamesEnum.ORDER}>
            <CartWrapper className={headerTheme}>
              <Cart />
              <CartCount className={globalReducer.CartCounter > 0 ? "" : "hide"}>{globalReducer.CartCounter}</CartCount>
            </CartWrapper>
          </OrderLinkWrapper>
        </Wrapper>
      </Container>
      <Modal className= {(menuIsOpen ? "show" : "hide") +  (isFirstCall ? " blocked":"")}>
        <Menu ref={menuEl} className={menuIsOpen ? "show" : "hide"}>
          <LinkWrapper to={RouteNamesEnum.HOME} className={getClasses(RouteNamesEnum.HOME)}>Vsevolod Svayba</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.EXHIBITIONS} className={getClasses(RouteNamesEnum.EXHIBITIONS)}>Exhibitions</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.GALERY} className={getClasses(RouteNamesEnum.GALERY)}>Gallery</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.ABOUT} className={getClasses(RouteNamesEnum.ABOUT)}>About</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.TAMARA_DEMENTJEVA} className={getClasses(RouteNamesEnum.TAMARA_DEMENTJEVA)}>Tamara Dementjeva</LinkWrapper>
          <LangSwitcher onClick={switchLang} className={headerTheme}>{globalReducer.Lang}</LangSwitcher>
        </Menu>
      </Modal>
    </RootContainer>
  )
}
