import React, { useState, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

import { ToggleButton, CancelButton } from './styles';

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);

  const hideWhenVisible = { display: visible ? 'none' : '' };
  const showWhenVisible = { display: visible ? '' : 'none' };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility,
    };
  });

  return (
    <div>
      <div style={hideWhenVisible}>
        <ToggleButton type="button" onClick={toggleVisibility}>
          {props.buttonLabel}
        </ToggleButton>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <CancelButton type="button" onClick={toggleVisibility}>
          cancel
        </CancelButton>
      </div>
    </div>
  );
});

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Togglable;
