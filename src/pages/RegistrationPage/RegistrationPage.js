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
              <img src="https://hrcdn.net/hackerrank/assets/home/hr-banner-new-ad413b961c8c9bb4c64fcd81367c9c8b.png" alt="jkjkjk"/>
            </div>
            <div className="col-md-7">
              <h4>Хотите попасть в IT сферу?</h4>
              <p>Хотите попасть в IT сферу, но не знаете с чего начать? Mentor.me, мы вам поможем. Только у нас вы сможете БЕСПЛАТНО пообщаться с профессионалами из сферы IT, получить те самые драгоценные знания которые вам так не хватает. Если же общение с ментором вызвало у вас чувство доверия, то вы без особых трудностей сможете встретиться в жизни и продолжить общение. Mentor.ME - учись с ментором или обучай других.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="row">
            <div className="col-md-6">
              <h5>Плюсы для ментора</h5>
              <img src="https://s3.envato.com/files/148761875/Hipsters-Megapack_Preview-4.jpg" alt="" />
              <ul>
                <li>Вклад в самого себя и в свои проекты, ведь когда вы обучаете других то обучаетесь и сами.</li>
                <li>Вклад в свою страну</li>
                <li>Увеличение своей репутации</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h5>Плюсы для учащегося:</h5>
              <img src="/img/person-flat.png" alt="" />
              <ul>
                <li>Обучение абсолютно бессплатно</li>
                <li>В качестве менторов выступают профессионалы с многолетним опытом работы</li>
                <li>Возможность перенести общения из "Виртуального мира" в "Мир живых"</li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/5/000/21e/198/276f4ff.jpg" alt=""/>
          <p>Mentor.me позвот достичь более широкого распостранения менторства, а также улучшения возможностей образования в целом</p>
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
