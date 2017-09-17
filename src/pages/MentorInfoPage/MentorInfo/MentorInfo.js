import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import './MentorInfo.css';


const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

const MentorInfo = ({ name, description, image }) => {
  return (
    <div className="mentor-info">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={image} alt="" />
          </div>
          <div className="col-md-7">
            <div>
              <label htmlFor="">Name</label>
              <p>{name}</p>
            </div>

            <div>
              <label htmlFor="">Description</label>
              <p>{description}</p>
            </div>

            <div className="buttons">
              <Link to="/chat" className="btn-reset">Meet</Link>
              <button className="btn-reset" onClick={() => alert('thanks!')}>Thanks</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

MentorInfo.propTypes = propTypes;

export default MentorInfo;
