import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';

import { loginUser } from '../../actions/index';

import Registration from './Registration/Registration';

import { browserHistory } from 'react-router';

import './RegistrationPage.css';


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
    this.props.loginUser({ name: this.state.name });
    browserHistory.push('/search');
  }

  handleElementsChange(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className="registraion-page">
        <header>
          <Registration handleData={this.handleElementsChange} />
        </header>
        <section>
          секция 1
        </section>
        <section>
          секция 2
        </section>
        <section>
          секция 3
        </section>
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
