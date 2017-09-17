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
        const { _id:id, name, description } = item;
        return (
          <MentorCardItem
            key={id}

            link={id}
            name={name}
            image="/img/person-flat.png"
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
