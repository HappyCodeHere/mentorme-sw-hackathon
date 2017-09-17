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
        <label htmlFor="">Имя</label>
        <input value={name} onChange={onChange} name="name" placeholder="Имя"/>
      </div>

      <div>
        <label htmlFor="">Описание</label>
        <textarea
          value={description}
          onChange={onChange}
          name="description"
          placeholder="Чему можете научить"
        >
        </textarea>
      </div>
    </div>
  )
}

MainInfo.propTypes = propTypes;

export default MainInfo;
