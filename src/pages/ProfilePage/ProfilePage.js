import React, { PropTypes, Component } from 'react';

import Avatar from './parts/Avatar/Avatar';
import MainInfo from './parts/MainInfo/MainInfo';

import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';

import axios from 'axios';

import { browserHistory } from 'react-router';

import './ProfilePage.css';


const propTypes = {

}

class ProfilePage extends Component {
  constructor() {
    super();

    this.state = {
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, accusamus!',
      name: 'Василий',

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
        <Header2 />
        <Avatar />
        <MainInfo description={this.state.description} name={this.state.name} onChange={this.handleElementsChange} />
          страница профиля


          {this.state.error && <div className="error">{this.state.error}</div>}

          <button onClick={this.handleButtonSaveClick}>Save Profile</button>
        <Footer />
      </div>
    )
  }
}

ProfilePage.propTypes = propTypes;

export default ProfilePage;
