import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import './Header.css';


const propTypes = {
  auth: PropTypes.object.isRequired,
}

const Header = ({ auth }) => {
  const { authenticated, name } = auth;
  return (
    <div className="header">
      <Link to ="/" className="logo">
        <img src="/logo2.png" alt="" />
      </Link>

      {auth.authenticated ?
        <div>
          <span>Hello, {name}</span>
          <Link to="/search" activeClassName="active-link">Поиск</Link>
          <Link to="/chat" activeClassName="active-link">Сообщения</Link>
          <Link to="/profile" activeClassName="active-link">Профиль</Link>
          <Link to="/registration" activeClassName="active-link">Выйти</Link>
        </div> :

        <div>
          <Link to="/search" activeClassName="active-link">Поиск</Link>
          <Link to="/registration" activeClassName="active-link">Регистрация</Link>
        </div>
      }
    </div>
  )
}

Header.propTypes = propTypes;

export default Header;
