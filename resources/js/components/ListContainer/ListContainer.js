import React from 'react';
import classes from './ListContainer.module.css';

const ListContainer = props => {
    return <div className={classes.container}>{props.children}</div>;
};

export default ListContainer;
