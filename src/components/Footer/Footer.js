import React, { PropTypes } from 'react';

import SocialButtons from '../SocialButtons/SocialButtons';

import './Footer.css';


const propTypes = {

}

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialButtons />
        <ul>
          <li>Email: hello@mentorme.com</li>
          <li>Позвони нам: +375-29-222-24-44</li>
        </ul>
      </div>
      <p>© 2017 Mentor me. All rights reserved. Making with love <span>❤</span></p>
    </footer>
  )
}

Footer.propTypes = propTypes;

export default Footer;
