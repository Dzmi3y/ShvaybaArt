import React, { useState } from 'react'
import { Container, Title } from './styles'
import { useTranslation } from "react-i18next";
import RouteNamesEnum from '../../../core/enums/RouteNamesEnum';
import { CardAbout } from '../../../components/CardAbout';

type Info = {
  date: string,
  text: string
}

export const About = () => {
  const { t } = useTranslation(['home', 'global', 'about']);
  const [isMobil, setIsMobil] = useState<boolean>(window.innerWidth < 1458);
  console.log(window.innerWidth);
  const infoList = (t("infoList", { returnObjects: true, ns: ['about'] })) as Info[];

  return (
    <Container id="about">
      <Title>{t("about", { ns: ['global'] })}</Title>

      {infoList.map((info, i) =>
        <CardAbout key={i} isRight={isMobil ? (i % 2 !== 0) : (i % 2 === 0)} isSmall={i == 0} date={info.date} text={info.text} />
      )}

    </Container>
  )
}
