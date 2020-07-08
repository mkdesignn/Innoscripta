import React from "react";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";
import classes from "./NextErrorModal.module.css";

const NextErrorModal = (props) => {
  return (
    <Modal
      width={"50%"}
      padding={"0"}
      height={"30vh"}
      show={props.show}
      close={props.close}
    >
      <div className={classes.container}>
        <div className={classes.top}></div>
        <div className={classes.bottom}>
          <div className={classes.header}>
            <h4>Please Choose an Order First !</h4>
          </div>
          <div className={classes.buttonContainer}>
            <Button title={"OK"} onClick={props.close} width={"30%"} />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NextErrorModal;
