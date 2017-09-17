import React, { Component, PropTypes } from 'react';

import './Registration.css';


const propTypes = {

}

class Registration extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <form className="registration">
        <div>
          <label htmlFor="">Name:</label>
          <input type="text" value={this.state.name} onChange={this.handleElementsChange} name="name"/>
        </div>

        <div>
          <label htmlFor="">Password:</label>
          <input type="password" value={this.state.password} onChange={this.handleElementsChange} name="password"/>
        </div>

        <input type="submit" onClick={this.handleSubmit} value="Register" />
      </form>
    )
  }
}

Registration.propTypes = propTypes;

export default Registration;
