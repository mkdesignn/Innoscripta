import React, { useEffect } from 'react';
import classes from './Backdrop.module.css';

const Backdrop = props => {

  return props.show ? (
    <div
      style={{ backgroundColor: props.backgroundColor }}
      onClick={props.click}
      className={classes.Backdrop}
    ></div>
  ) : null;
};

export default Backdrop;
