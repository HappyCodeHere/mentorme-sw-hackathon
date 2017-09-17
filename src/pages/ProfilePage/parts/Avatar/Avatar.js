import React, { Component, PropTypes } from 'react';

import './Avatar.css';


const propTypes = {

}

class Avatar extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="avatar">
        <img src="/img/person-flat.png" alt="" />
      </div>
    )
  }
}

Avatar.propTypes = propTypes;

export default Avatar;
