import React from 'react';

const Notification = ({ message }) => {
  let classes = '';
  if (message === null) {
    return null
  } else {
    classes = `message ${message.type}`
  }

  return (
    <div className={classes}>
      {message.body}
    </div>
  );
};

export default Notification;