import React from 'react';

import classes from './Button.css';
const button = (props) => (
    <button 
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.cliked}>{props.children}</button>
);

export default button; 