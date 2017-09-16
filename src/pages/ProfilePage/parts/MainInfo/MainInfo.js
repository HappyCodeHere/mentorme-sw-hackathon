import React, { Component, PropTypes } from 'react';

import './MainInfo.css';


const propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const MainInfo = ({ description, name, image, onChange }) => {
  return (
    <div className="main-info">
      <textarea value={description} onChange={onChange} name="description"></textarea>
      <input value={name} onChange={onChange} name="name"/>
    </div>
  )
}

MainInfo.propTypes = propTypes;

export default MainInfo;
