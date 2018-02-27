import React from 'react';

// Temperature of the predictions
const TempDisplay = props => {
  return <span>{`${Math.round(Number(props.temp))}ºF`}</span>;
};

export default TempDisplay;
