import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { loginUser } from '../../actions/index';

import { browserHistory } from 'react-router';

import './RegistrationPage';


const propTypes = {
}

class RegistrationPage extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      password: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleElementsChange = this.handleElementsChange.bind(this);
  }

  handleSubmit() {
    this.props.loginUser();
    browserHistory.push('/search');
  }

  handleElementsChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="registraion-page">
        <Header auth={this.props.auth} />

        <form>

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


        <Footer />
      </div>
    )
  }
}

RegistrationPage.propTypes = propTypes;

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth
  }
}

export default connect(mapStateToProps, { loginUser })(RegistrationPage);
