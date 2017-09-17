import React, { PropTypes } from 'react';

import { Link } from 'react-router';

import './MentorInfo.css';


const propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  thanksCount: PropTypes.number.isRequired,
}

const MentorInfo = ({ name, description, image, thanksCount, link }) => {
  return (
    <div className="mentor-info">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={image} alt="" />
            <p>Поблагодарили: {thanksCount}</p>
          </div>
          <div className="col-md-7">
            <div>
              <label htmlFor="">Имя</label>
              <p>{name}</p>
            </div>

            <div>
              <label htmlFor="">Описание</label>
              <p>{description}</p>
            </div>

            <div className="buttons">
              <Link to={`/chat?id=${link}`} className="btn-reset">Написать</Link>
              <button className="btn-reset" onClick={() => alert('thanks!')}>Поблагодарить</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

MentorInfo.propTypes = propTypes;

export default MentorInfo;
