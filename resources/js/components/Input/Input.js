import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
    return (
        <div style={{height: props.height}} className={classes.container}>
            <label htmlFor="">{props.lable} :</label>
            <input
                name={props.name}
                type={props.type}
                placeholder={props.placeholder}
                onChange={(event, name) => props.onChange(event, props.name)}
                value={props.value}
            />
            <span
                className={classes.innerClass}
                style={{display: props.innerText ? "block" : "none"}}
            >
        {props.innerText}
      </span>
        </div>
    );
};

export default Input;
