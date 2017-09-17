import React, { PropTypes, Component } from 'react';

import Avatar from './parts/Avatar/Avatar';
import MainInfo from './parts/MainInfo/MainInfo';

// import Header2 from '../../components/Header2/Header2';
// import Footer from '../../components/Footer/Footer';

import axios from 'axios';

import { browserHistory } from 'react-router';

import './ProfilePage.css';


const propTypes = {

}

class ProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      description: '',
      name: '',

      error: null,
    }

    this.handleElementsChange = this.handleElementsChange.bind(this);
    this.handleButtonSaveClick = this.handleButtonSaveClick.bind(this);
  }

  handleElementsChange(event) {
    const { name, value } = event.target;
    console.log(name, value);
    this.setState({[name]: value});
  }

  handleButtonSaveClick() {
    const { name, description } = this.state;
    axios.post(`/mentors`, {name, description})
      .then(data => {
        browserHistory.push('/search');
      })
      .catch(error => {
        console.log(error);
        this.setState({error: JSON.stringify(error)})
      })
  }

  render() {
    console.log(this.state);
    return (
      <div className="profile-page">

        <div className="container">
          <div className="row">
            <h3>Профиль</h3>
            <div className="col-md-5">
              <Avatar />
              <p>Вас поблагодарили: {Math.floor(Math.random() * 6)}</p>
            </div>
            <div className="col-md-7">
              <MainInfo description={this.state.description} name={this.state.name} onChange={this.handleElementsChange} />
            </div>
          </div>

          {this.state.error && <div className="error">{this.state.error}</div>}

          <button className="btn-reset" onClick={this.handleButtonSaveClick}>Сохранить</button>
        </div>

      </div>
    )
  }
}

ProfilePage.propTypes = propTypes;

export default ProfilePage;
