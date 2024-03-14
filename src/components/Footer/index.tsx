import React, { useEffect, useState } from 'react'
import * as styles from "./styles";
import { ReactComponent as FaceIcon } from "../../assets/images/icons/face.svg";
import { ReactComponent as InstIcon } from "../../assets/images/icons/inst.svg";
import { ReactComponent as TikIcon } from "../../assets/images/icons/tik.svg";
import { ReactComponent as XIcon } from "../../assets/images/icons/x.svg";
import RouteNamesEnum from '../../core/enums/RouteNamesEnum';
import { useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";


export const Footer = () => {

    const [footerTheme, setFooterTheme] = useState<string>("");
    const location = useLocation();
    const { t } = useTranslation(['global']);

    useEffect(() => {

        switch (location.pathname) {
            case RouteNamesEnum.ORDER.toString():
                setFooterTheme("dark");
                break;
            case RouteNamesEnum.TAMARA_DEMENTJEVA.toString():
                setFooterTheme("red");
                break;

            default:
                setFooterTheme("");
        }
    }, [location.pathname])
    return (<styles.Wrapper className={footerTheme}>
        <styles.Container>
            <styles.NavWrapper>
                <styles.FooterNavLink to={RouteNamesEnum.EXHIBITIONS}>{t("exhibitions", {ns: ['global']})}   </styles.FooterNavLink>
                <styles.FooterNavLink to={RouteNamesEnum.GALERY}>{t("gallery", {ns: ['global']})}</styles.FooterNavLink>
                <styles.FooterNavLink to={RouteNamesEnum.ABOUT}>{t("about", {ns: ['global']})}</styles.FooterNavLink>
                <styles.FooterNavLink to={RouteNamesEnum.TAMARA_DEMENTJEVA}>{t("tamara_dementjeva", {ns: ['global']})}</styles.FooterNavLink>
            </styles.NavWrapper>

            <styles.ImgContainer>
                <styles.ImgWrapper className={footerTheme}>
                    <XIcon />
                </styles.ImgWrapper>
                <styles.ImgWrapper className={footerTheme}>
                    <InstIcon />
                </styles.ImgWrapper>
                <styles.ImgWrapper className={footerTheme}>
                    <TikIcon />
                </styles.ImgWrapper>
                <styles.ImgWrapper className={footerTheme}>
                    <FaceIcon />
                </styles.ImgWrapper>
            </styles.ImgContainer>

            <styles.EmailWrapper>
                <styles.EmailTitle>e-mail:</styles.EmailTitle>
                <styles.Email>contact@shvayba.com</styles.Email>
                <styles.Email>tamara@shvayba.com</styles.Email>
            </styles.EmailWrapper>
            <styles.LogoWrapper>
                Vsevolod Shvayba
            </styles.LogoWrapper>

        </styles.Container>
    </styles.Wrapper>
    )
}
