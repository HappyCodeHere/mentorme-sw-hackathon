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
      <div>
        <label htmlFor="">Name</label>
        <input value={name} onChange={onChange} name="name"/>
      </div>

      <div>
        <label htmlFor="">Description</label>
        <textarea
          value={description}
          onChange={onChange}
          name="description"
          placeholder="What you can teach"
        >
        </textarea>
      </div>
    </div>
  )
}

MainInfo.propTypes = propTypes;

export default MainInfo;
