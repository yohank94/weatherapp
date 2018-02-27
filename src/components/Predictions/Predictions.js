import React from 'react';

import IconImage from './IconImage';
import DateTime from './DateTime';
import TempDisplay from './TempDisplay';

// Border for displaying the predictions
const borderStyle = {
  width: 'auto',
  height: 'auto',
  borderStyle: 'solid',
  borderWidth: 1,
  textAlign: 'center',
  display: 'inline-block'
};

// Create a single prediction object at certain date and time.
const Predictions = props => {
  const predBoxes = props.data.map(({ date, icon, temp, weather }, index) => {
    return (
      <div key={index} className="col s2" style={borderStyle}>
        <DateTime date={date} />
        <IconImage icon={icon} weather={weather} />
        <br />
        <TempDisplay temp={temp} />
      </div>
    );
  });
  return predBoxes;
};

export default Predictions;
