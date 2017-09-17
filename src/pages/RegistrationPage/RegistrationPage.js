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
          <div className="row">
            <div className="col-md-5">
              <img src="" alt="jkjkjk"/>
            </div>
            <div className="col-md-7">
              <h4>Залоговок</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere pariatur mollitia omnis veritatis beatae veniam tempore excepturi. Temporibus neque alias enim praesentium, fugit cupiditate. Eius qui nam quod eum, accusamus sit. Aspernatur quidem, ab ad quibusdam quia doloribus nisi rerum asperiores modi provident ullam commodi fugit ipsam autem, soluta accusamus.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-6">
              <h5>Заголовок</h5>
              <img src="" alt="9090" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus modi, dicta quas at architecto cumque reiciendis sit iure rem vel commodi neque ipsum voluptates et, placeat adipisci in aliquid.</p>
            </div>
            <div className="col-md-6">
              <h5>Заголовок</h5>
              <img src="" alt="9090" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum necessitatibus modi, dicta quas at architecto cumque reiciendis sit iure rem vel commodi neque ipsum voluptates et, placeat adipisci in aliquid.</p>
            </div>
          </div>
        </section>
        <section>
          <img src="" alt="9090"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, doloremque blanditiis, eveniet libero et culpa fugit maxime provident praesentium ea consectetur distinctio dicta, inventore incidunt tempore, obcaecati nam voluptates? Tempora aliquam possimus aperiam officiis, facilis eaque pariatur assumenda necessitatibus incidunt?</p>
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
