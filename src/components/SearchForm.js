import React from 'react';

// Creates input for the weather API query
const SearchForm = props => {
  return (
    <form onSubmit={props.onSubmit}>
      <i className="material-icons prefix small">search</i>
      <input
        id="cityName"
        placeholder="Enter a City"
        type="text"
        autoComplete="off"
      />
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
