import React, { PropTypes } from 'react';

import './Header.css';


const propTypes = {
  auth: PropTypes.object.isRequired,
}

const Header = () => {
  return (
    <div className="header">
      лого
    </div>
  )
}

Header.propTypes = propTypes;

export default Header;
