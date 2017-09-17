import React, { Component, PropTypes } from 'react';

import Search from './parts/Search/Search';
import MentorCardList from './parts/MentorCardList/MentorCardList';

// import Header2 from '../../components/Header2/Header2';
// import Footer from '../../components/Footer/Footer';

import { Loader } from '../../components/common';




import './SearchPage.scss';

import axios from 'axios';


const propTypes = {

}

class SearchPage extends Component {
  constructor() {
    super();

    this.state = {
      mentors: [],
      search: '',
      firstTimeLoader: true,
    }

    this.getMentors = this.getMentors.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getMentors();
  }

  getMentors() {
    axios.get(`/mentors?search=${this.state.search}`)
      .then(data => {
        this.setState({mentors: data.data, firstTimeLoader: false});
      })
      .catch(error => {
        console.log(error);
      })
  }

  handleSearch(search) {
    // const { value } = event.target;
    this.setState({search}, () => {
      this.getMentors();
    });
  }

  render() {
    return (
      <div className="search-page">
        {this.state.firstTimeLoader ?
        <Loader /> :
        <div>
          <Search search={this.state.search} handleData={this.handleSearch} />

          {this.state.mentors.length === 0 ?
          <p>Mentor not found:(</p> :
          <MentorCardList mentors={this.state.mentors} />
          }
        </div>
        }
      </div>
    )
  }
}

SearchPage.propTypes = propTypes;

export default SearchPage;
