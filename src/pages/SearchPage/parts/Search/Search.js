import React, { PropTypes } from 'react';

import './Search.css';


const propTypes = {
  search: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

const Search = ({ search, handleData }) => {
  return (
    <div className="search">
      <input
        type="text"
        value={search}
        onChange={(event) => handleData(event.target.value)}
        placeholder="Find mentor"
        />
    </div>
  )
}

Search.propTypes = propTypes;

export default Search;
