import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import axios from 'axios';

import { Loader } from '../../components/common';

import MentorInfo from './MentorInfo/MentorInfo';

import './MentorInfoPage.css';

import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';




const propTypes = {

}

class MentorInfoPage extends Component {
  constructor() {
    super();

    this.state = {
      mentorInfo: {},
    }
  }

  componentWillMount() {
    this.getMentorInfo(this.props.params.id);
  }

  getMentorInfo(id) {
    axios.get(`/mentor?id=${id}`)
      .then(data => {
        setTimeout(() => {
          this.setState({mentorInfo: data.data[0]})
        }, 350);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="mentor-info-page">
        <Header2 />
        <h3>Mentor information</h3>

        {Object.keys(this.state.mentorInfo).length === 0 ?
          <Loader /> :
          <MentorInfo
            name={this.state.mentorInfo.name}
            description={this.state.mentorInfo.description}
            image="/img/person-flat.png"
          />
        }

        <Link to="/search" className="btn-reset">Back</Link>

      <Footer />
      </div>
    )
  }
}

MentorInfoPage.propTypes = propTypes;

const mapStateToProps = (state) => {
  const {} = state;
  return {

  }
}

export default connect(mapStateToProps)(MentorInfoPage);
