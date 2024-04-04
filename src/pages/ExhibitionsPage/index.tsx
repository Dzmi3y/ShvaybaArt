import React from 'react'
import { Container, ExhibitionsContainer, Title } from './styles'
import { useTranslation } from "react-i18next";
import ExhibitionsData from "../../core/data/exhibitionsData.json"
import { Exhibition } from '../../core/types/Exhibition';
import { ExhibitionCard } from './ExhibitionCard';

export const ExhibitionsPage = () => {
  const { t } = useTranslation(['global']);
  const ExhibitionsList: Exhibition[] = ExhibitionsData as unknown as Exhibition[];

  return (
    <Container>
      <Title>{t("exhibitions", { ns: ['global'] })}</Title>
      <ExhibitionsContainer>
        {ExhibitionsList.map((exhibition, i) =>
          (<ExhibitionCard key={i} exhibition={exhibition} />)
        )}
      </ExhibitionsContainer>
    </Container>
  )
}
