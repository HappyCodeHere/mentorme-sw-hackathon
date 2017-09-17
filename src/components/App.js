import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import './App.css';

const propTypes = {
  auth: PropTypes.object.isRequired,
}

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header auth={this.props.auth} />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth
  }
}

export default connect(mapStateToProps)(App);
