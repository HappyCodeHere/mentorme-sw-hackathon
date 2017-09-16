import React, { PropTypes } from 'react';

import MentorCardItem from '../MentorCardItem/MentorCardItem';

import './MentorCardList.css';


const propTypes = {
  mentors: PropTypes.array.isRequired,
}

const MentorCardList = ({ mentors }) => {
  return (
    <div className="mentor-card-list">

      {mentors.map(item => {
        const { id, name, image, description } = item;
        return (
          <MentorCardItem
            key={id}
            name={name}
            image={image}
            description={description}
          />
        )
      })
      }

    </div>
  )
}

MentorCardList.propTypes = propTypes;

export default MentorCardList;
