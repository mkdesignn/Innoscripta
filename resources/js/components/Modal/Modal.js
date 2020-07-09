import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
    return (
        <div>
            <Backdrop
                backgroundColor={props.backgroundColor}
                click={props.close}
                show={props.show}
            />
            <div
                style={{
                    padding: props.padding,
                    width: props.width,
                    height: props.height,
                    display: props.show ? "block" : "none",
                }}
                className={classes.Modal}
            >
                {props.children}
            </div>
        </div>
    );
};

export default Modal;
