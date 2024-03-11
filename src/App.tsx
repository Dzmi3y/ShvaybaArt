import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GalleryPage } from './pages/GalleryPage';
import { OrderPage } from './pages/OrderPage';
import { ExhibitionsPage } from './pages/ExhibitionsPage';
import { TamaraDementjevaPage } from './pages/TamaraDementjevaPage';
import { PageNotFound } from './pages/PageNotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/gallery" Component={GalleryPage} />
        <Route path="/order" Component={OrderPage} />
        <Route path="/exhibitions" Component={ExhibitionsPage} />
        <Route path="/tamara_dementjeva" Component={TamaraDementjevaPage} />
        <Route Component={PageNotFound} />
      </Routes>
    </>
  );
}

export default App;
