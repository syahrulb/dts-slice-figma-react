import React, { Fragment }  from 'react';
import BannerKomponen from './components/BannerKomponen.jsx';
import ArtikelKomponen from './components/ArtikelKomponen';
import './App.css';

function App() {
  return (
    <Fragment>
      <ArtikelKomponen lokasi="kiri" />
      <BannerKomponen />
    </Fragment>
  );
}

export default App;
