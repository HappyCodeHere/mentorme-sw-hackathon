import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import './Header2.css';


const propTypes = {

}

const Header2 = () => {
  return (
    <header className="header2">
      <img src="" alt=""/>
      <div>
        <Link to="/search" activeClassName="active-link">Search</Link>
        <Link to="/chat" activeClassName="active-link">Chat</Link>
        <Link to="/profile" activeClassName="active-link">Profile</Link>
        <Link to="/registration" activeClassName="active-link">Logout</Link>
      </div>
    </header>
  )
}

Header2.propTypes = propTypes;

export default Header2;
