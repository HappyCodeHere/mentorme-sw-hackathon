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
  }

  handleSubmit({name, password}) {
    console.log(name, password);
    this.props.loginUser({ name: name });
    browserHistory.push('/search');
  }



  render() {
    return (
      <div className="registraion-page">
        <header>
          <Registration
            handleSubmit={this.handleSubmit}
          />
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
