import React from 'react';
// Weather icon object
const IconImage = props => {
  return (
    <img
      src={require(`../../images/${props.icon}.png`)}
      alt={`${props.weather}`}
    />
  );
};

export default IconImage;
