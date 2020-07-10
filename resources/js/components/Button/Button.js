import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    return (
        <div data-testid="button"
            onClick={props.onClick}
            style={{width: props.width}}
            className={classes.container}
        >
            {props.title}
        </div>
    );
};

export default Button;
