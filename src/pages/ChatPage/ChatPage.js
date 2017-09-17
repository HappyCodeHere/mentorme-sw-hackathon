import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// import {} from '../actions/';


import Chat from './parts/Chat/Chat';


import './ChatPage';


const propTypes = {
  auth: PropTypes.string.isRequired,
}

class ChatPage extends Component {
  constructor() {
    super();

    this.state = {

    }
  }

  render() {
    return (
      <div className="chat-page">
        <Chat />
      </div>
    )
  }
}

ChatPage.propTypes = propTypes;

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    auth
  }
}

export default connect(mapStateToProps)(ChatPage);
