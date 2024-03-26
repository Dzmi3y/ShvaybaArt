import React, { useState } from 'react'
import { Container, Title } from './styles'
import { useTranslation } from "react-i18next";
import { CardAbout } from '../../../components/CardAbout';

type Info = {
  date: string,
  text: string
}

export const About = () => {
  const { t } = useTranslation(['home', 'global', 'about']);
  const [isTablet] = useState<boolean>(window.innerWidth < 1458);
  const [isMobil] = useState<boolean>(window.innerWidth < 500);
  const infoList = (t("infoList", { returnObjects: true, ns: ['about'] })) as Info[];

  const getImgSrcById = (id: number) => {
    if (id === 1 || id === 3 || id === 5) {
      return isMobil ? `/images/home/about/mobil_about_${id}.jpg` : `/images/home/about/about_${id}.jpg`;
    }
    return "";
  }

  return (
    <Container id="about">
      <Title>{t("about", { ns: ['global'] })}</Title>

      {infoList.map((info, i) =>
        <CardAbout key={i}
          isRight={isTablet ? (i % 2 !== 0) : (i % 2 === 0)}
          isSmall={i === 0}
          date={info.date}
          text={info.text}
          isMobil={isMobil}
          imgUrl={getImgSrcById(i)} />
      )}



    </Container>
  )
}
