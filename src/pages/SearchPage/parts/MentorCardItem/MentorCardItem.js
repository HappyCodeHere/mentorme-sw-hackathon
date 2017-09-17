import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import './MentorCardItem.css';


const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

const MentorCardItem = ({ name, description, image, link }) => {
  return (
    <div className="mentor-card-item">
      <div className="row">
        <div className="col-md-5">
          <img src={image} alt="" />
        </div>
        <div className="col-md-7">
          <div>
            <label htmlFor="">Имя:</label>
            <p>{name}</p>
          </div>
          <div>
            <label htmlFor="">Описание:</label>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <Link to={`mentor/${link}`}>подробнее</Link>
    </div>
  )
}

MentorCardItem.propTypes = propTypes;

export default MentorCardItem;
