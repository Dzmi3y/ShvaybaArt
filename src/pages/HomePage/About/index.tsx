import React from 'react'
import { Container, Title } from './styles'
import { useTranslation } from "react-i18next";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { CardAbout } from '../../../components/CardAbout';



export const About = () => {
    const { t } = useTranslation(['home','global']);
  return (
    <Container id="about">
        <Title>{t("about", { ns: ['global'] })}</Title>
        <CardAbout date='1923' text='asdas sdasd dsasd sdasd'/>
        <CardAbout isRight date='1924' text='asdas sdasd dsasd sdasd'/>
        <CardAbout isRight isSmall date='1925' text='asdas sdasd dsasd sdasd'/>
    </Container>
  )
}
