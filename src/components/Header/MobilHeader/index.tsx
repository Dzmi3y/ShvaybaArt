import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as Cart } from "../../../assets/images/cart.svg";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { Burger, BurgerLine, CartCount, CartWrapper, Container, LangSwitcher, LinkWrapper, Menu, Modal, OrderLinkWrapper, RootContainer, Title, Wrapper } from './styles';
import LangEnum from '../../../core/enums/LangEnum';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { changeLang } from '../../../core/store/reducers/GlobalReducer';
import { useTranslation } from "react-i18next";

export const MobilHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
  const [headerTheme, setHeaderTheme] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [titleClasses, setTitleClasses] = useState<string>("");
  const [burgerClasses, setBurgerClasses] = useState<string>("");
  const [isFirstCall, setIsFirstCall] = useState<boolean>(true);
  const location = useLocation();
  const globalReducer = useAppSelector(state => state.globalReducer);
  const cartReducer = useAppSelector(state => state.cartReducer);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation(['global']);


  const burgerClick = () => {
    setBurgerClasses(!menuIsOpen ? "open" : "close");
    setMenuIsOpen(!menuIsOpen);
    setIsFirstCall(false);
  }

  const switchLang = () => {
    const newLang = (globalReducer.Lang === LangEnum.RU) ? LangEnum.EN : LangEnum.RU;
    i18n.changeLanguage(newLang);
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
        setTitle(t("tamara_dementjeva", { ns: ['global'] }));
        setHeaderTheme("red");
        setTitleClasses("");
        break;

      case RouteNamesEnum.HOME.toString():
        if(location.pathname+location.hash === RouteNamesEnum.ABOUT.toString()){
          setTitle(t("about", { ns: ['global'] }));
          setHeaderTheme("");
          setTitleClasses("");
          break;
        }

        setTitle("Vsevolod Svayba");
        setHeaderTheme("");
        setTitleClasses("logo");
        break;

      case RouteNamesEnum.EXHIBITIONS.toString():
        setTitle(t("exhibitions", { ns: ['global'] }));
        setHeaderTheme("");
        setTitleClasses("");
        break;

      case RouteNamesEnum.GALERY.toString():
        setTitle(t("gallery", { ns: ['global'] }));
        setHeaderTheme("");
        setTitleClasses("");
        break;

      case RouteNamesEnum.ORDER.toString():
        setTitle(t("order", { ns: ['global'] }));
        setHeaderTheme("");
        setTitleClasses("");
        break;

      default:
        setHeaderTheme("");
        setTitle("");
        setTitleClasses("");
    }
  }, [location.pathname,location.hash,t])

  const menuEl = useRef<HTMLInputElement>(null);
  const burgerEl = useRef<HTMLInputElement>(null);


  useEffect(() => {
    const onClick = (e: any) => {
      if (burgerEl.current && menuEl.current) {
        const isOutsideClick = !menuEl.current.contains(e.target);
        const isNotBurgerClick = !burgerEl.current.contains(e.target);
        if (isOutsideClick && isNotBurgerClick) {
          setBurgerClasses("close");
          setMenuIsOpen(false);
        }
      }
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);

  }, []);

  return (
    <RootContainer className={headerTheme}>
      <Container>
        <Wrapper>
          <Burger ref={burgerEl} className={burgerClasses + " " + headerTheme} onClick={burgerClick}>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
          </Burger>
          <Title className={titleClasses}>{title}</Title>
          <OrderLinkWrapper to={RouteNamesEnum.ORDER}>
            <CartWrapper className={headerTheme}>
              <Cart />
              <CartCount className={cartReducer.CartCounter > 0 ? "" : "hide"}>{cartReducer.CartCounter}</CartCount>
            </CartWrapper>
          </OrderLinkWrapper>
        </Wrapper>
      </Container>
      <Modal className={(menuIsOpen ? "show" : "hide") + (isFirstCall ? " blocked" : "")}>
        <Menu ref={menuEl} className={menuIsOpen ? "show" : "hide"}>
          <LinkWrapper to={RouteNamesEnum.HOME} className={getClasses(RouteNamesEnum.HOME)} onClick={()=>{window.scrollTo(0,0)}}>Vsevolod Svayba</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.EXHIBITIONS} className={getClasses(RouteNamesEnum.EXHIBITIONS)}>{t("exhibitions", { ns: ['global'] })}</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.GALERY} className={getClasses(RouteNamesEnum.GALERY)}>{t("gallery", { ns: ['global'] })}</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.ABOUT} className={getClasses(RouteNamesEnum.ABOUT)}>{t("about", { ns: ['global'] })}</LinkWrapper>
          <LinkWrapper to={RouteNamesEnum.TAMARA_DEMENTJEVA} className={getClasses(RouteNamesEnum.TAMARA_DEMENTJEVA)}>{t("tamara_dementjeva", { ns: ['global'] })}</LinkWrapper>
          <LangSwitcher onClick={switchLang} className={headerTheme}>{globalReducer.Lang}</LangSwitcher>
        </Menu>
      </Modal>
    </RootContainer>
  )
}