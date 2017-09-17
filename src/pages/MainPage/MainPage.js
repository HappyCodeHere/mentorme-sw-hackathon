import React, { PropTypes } from 'react';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import './MainPage.css';


const propTypes = {

}

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      главная страница
      <Footer />
    </div>
  )
}

MainPage.propTypes = propTypes;

export default MainPage;
