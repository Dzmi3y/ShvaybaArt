import React, { useEffect, useRef, useState } from 'react'
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

  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const bottom = aboutRef.current?.getBoundingClientRect().bottom;
      const top = aboutRef.current?.getBoundingClientRect().top;
      const isCorrect = bottom!==undefined && top!==undefined;
      const isScrolIntoAboutBlock = isCorrect && (top <= 0) && (bottom > 0);
      const isHashAbout = window.location.hash==="about" || window.location.hash==="#about";

      if (isScrolIntoAboutBlock && !isHashAbout ) {
        let oldScrollPosition = window.scrollY;
        window.location.hash = "about";
        window.scrollTo(0, oldScrollPosition);
        
      }

      if (!isScrolIntoAboutBlock && isHashAbout) {
        let oldScrollPosition = window.scrollY;
        window.location.hash = "";
        window.scrollTo(0, oldScrollPosition);
      }
    }

    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);

  }, []);


  return (
    <Container ref={aboutRef} id="about">
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
