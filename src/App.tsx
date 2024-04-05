import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { OrderPage } from './pages/OrderPage';
import { ExhibitionsPage } from './pages/ExhibitionsPage';
import { TamaraDementjevaPage } from './pages/TamaraDementjevaPage';
import { PageNotFound } from './pages/PageNotFound';
import { Footer } from './components/Footer';
import styled from 'styled-components';
import RouteNamesEnum from  './core/enums/RouteNamesEnum'
import { Header } from './components/Header';
import { UpScrollButton } from './components/Buttons/UpScrollButton';
import { DetailedExhibitionPage } from './pages/DetailedExhibitionPage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const FooterWrapper = styled.div`
  margin-top: auto;
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <UpScrollButton/>
      <Routes>
        <Route path={RouteNamesEnum.HOME} Component={HomePage} />
        <Route path={RouteNamesEnum.GALERY} Component={GalleryPage} />
        <Route path={RouteNamesEnum.ORDER} Component={OrderPage} />
        <Route path={RouteNamesEnum.EXHIBITIONS} Component={ExhibitionsPage} />
        <Route path={RouteNamesEnum.DETAILED_EXHIBITION_PAGE} Component={DetailedExhibitionPage} />
        <Route path={RouteNamesEnum.TAMARA_DEMENTJEVA} Component={TamaraDementjevaPage} />
        <Route path='*' Component={PageNotFound} />
      </Routes>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppContainer>
  );
}

export default App;
