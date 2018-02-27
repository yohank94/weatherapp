import React from 'react';

// Date and Time object
const DateTime = props => {
  return (
    <div style={{ margin: 0 }}>
      <span>{props.date.toString().split(' ')[0]}</span>
      <br />
      <span>{`${
        props.date
          .toLocaleString()
          .split(',')[1]
          .split(':')[0]
      } ${
        props.date
          .toLocaleString()
          .split(',')[1]
          .split(' ')[2]
      }`}</span>
    </div>
  );
};

export default DateTime;
