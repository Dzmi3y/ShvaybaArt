import React, { useEffect, useState } from 'react'
import {Container, LinkWrapper, Logo, Wrapper,CartCount, CartWrapper, LangSwitcher } from './styles'
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum'
import { ReactComponent as Cart } from "../../../assets/images/cart.svg";
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../core/hooks';
import { changeLang } from '../../../core/store/reducers/GlobalReducer';
import LangEnum from '../../../core/enums/LangEnum';

export const DesktopHeader = () => {
    const [headerTheme, setHeaderTheme] = useState<string>("");
    const location = useLocation();
    const globalReducer = useAppSelector(state => state.globalReducer);
    const dispatch = useAppDispatch();

    const switchLang=()=>{
        const newLang = (globalReducer.Lang === LangEnum.RU) ? LangEnum.EN: LangEnum.RU;
        dispatch(changeLang(newLang));
    }

    const getClasses =(name:RouteNamesEnum)=>{
        if( RouteNamesEnum.ABOUT === name){
          return location.pathname+location.hash === RouteNamesEnum.ABOUT?"selected": "";
        }
        if( RouteNamesEnum.HOME === name){
            return((location.pathname===RouteNamesEnum.HOME) && (location.pathname+location.hash !== RouteNamesEnum.ABOUT))
                ?"selected": "";
          }
        return location.pathname === name ?"selected" :""
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
                <Logo to={RouteNamesEnum.HOME} className={getClasses(RouteNamesEnum.HOME)}>Vsevolod Shvayba</Logo>
                <LinkWrapper to={RouteNamesEnum.EXHIBITIONS} className={getClasses(RouteNamesEnum.EXHIBITIONS)}>Exhibitions</LinkWrapper>
                <LinkWrapper to={RouteNamesEnum.GALERY} className={getClasses(RouteNamesEnum.GALERY)}>Gallery</LinkWrapper>
                <LinkWrapper to={RouteNamesEnum.ABOUT} className={getClasses(RouteNamesEnum.ABOUT)}>About</LinkWrapper>
                <LinkWrapper to={RouteNamesEnum.TAMARA_DEMENTJEVA} className={getClasses(RouteNamesEnum.TAMARA_DEMENTJEVA)}>Tamara Dementjeva</LinkWrapper>
                <LinkWrapper to={RouteNamesEnum.ORDER}>
                    <CartWrapper className={headerTheme}>
                        <Cart />
                        <CartCount className={globalReducer.CartCounter>0?"":"hide"}>{globalReducer.CartCounter}</CartCount>
                    </CartWrapper>
                </LinkWrapper>
                <LangSwitcher onClick={switchLang} className={headerTheme}>{globalReducer.Lang}</LangSwitcher>
            </Wrapper>
        </Container>
    )
}
