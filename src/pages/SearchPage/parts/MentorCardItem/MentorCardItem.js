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
    <Link to={`mentor/${link}`} className="mentor-card-item">
      <img src={image} alt="" />
      name: {name}
      description: {description}
    </Link>
  )
}

MentorCardItem.propTypes = propTypes;

export default MentorCardItem;
