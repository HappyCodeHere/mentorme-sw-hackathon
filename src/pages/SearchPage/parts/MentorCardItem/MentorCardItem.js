import React, { PropTypes } from 'react';

import './MentorCardItem.css';


const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
}

const MentorCardItem = ({ name, description, image }) => {
  return (
    <div className="mentor-card-item">
      name: {name}
      description: {description}
      <img src={image} alt="" />
    </div>
  )
}

MentorCardItem.propTypes = propTypes;

export default MentorCardItem;
