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
      <Link to ="/">
        <img src="" alt="9090" />
      </Link>

      {auth.authenticated ?
        <div>
          <span>Hello, {name}</span>
          <Link to="/search" activeClassName="active-link">Search</Link>
          <Link to="/chat" activeClassName="active-link">Chat</Link>
          <Link to="/profile" activeClassName="active-link">Profile</Link>
          <Link to="/registration" activeClassName="active-link">Logout</Link>
        </div> :

        <div>
          <Link to="/search" activeClassName="active-link">Search</Link>
          <Link to="/registration" activeClassName="active-link">Logout</Link>
        </div>
      }
    </div>
  )
}

Header.propTypes = propTypes;

export default Header;
