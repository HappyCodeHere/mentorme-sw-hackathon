import React, { Component, PropTypes } from 'react';

import './Registration.css';


const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

class Registration extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
    }

    this.handleElementsChange = this.handleElementsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { name, password } = this.state;
    this.props.handleSubmit({name, password });
  }

  handleElementsChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <form className="registration">
        <div>
          <input type="text" value={this.state.name} onChange={this.handleElementsChange} name="name" placeholder="Имя" />
        </div>

        <div>
          <input type="password" value={this.state.password} onChange={this.handleElementsChange} name="password" placeholder="Пароль" />
        </div>

        <input type="submit" onClick={this.handleSubmit} value="Войти" className="btn-reset" />
      </form>
    )
  }
}

Registration.propTypes = propTypes;

export default Registration;
