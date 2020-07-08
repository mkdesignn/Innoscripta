import React from "react";
import Modal from "../Modal/Modal";
import classes from "./OrderDetailsModal.module.css";
import Button from "../Button/Button";

const OrderDetailsModal = (props) => {
  const ingredientsArray =
    props.activeOrderItem &&
    JSON.parse(props.activeOrderItem.ingredients).join();
  return (
    <Modal
      width={"50%"}
      padding={"0"}
      show={props.show}
      close={props.close}
    >
      {props.activeOrderItem && (
        <div className={classes.container}>
          <div className={classes.top}>
            <h3>{props.activeOrderItem.name}</h3>

            <p>{props.activeOrderItem.description}</p>
          </div>
          <div className={classes.bottom}>
            <div className={classes.image}>
              <img
                src={props.activeOrderItem.avatar}
                alt={props.activeOrderItem.name}
              />
            </div>
            <div className={classes.bottomHeader}>
              <div className={classes.item}>
                <span>Prepar Time: </span>
                {props.activeOrderItem.prepare_time} min
              </div>
              <div className={classes.item}>
                <span>Weight: </span>
                {props.activeOrderItem.weight} gr
              </div>
            </div>
            <h4>Ingredient:</h4>
            <p>{ingredientsArray}</p>
            <div className={classes.bottomFooter}>
              <div className={classes.count}>
                <div onClick={props.onPlusClick} className={classes.plus}>
                  <p>+</p>
                </div>
                <div className={classes.countNum}>
                  {props.activeOrderItem.quantity}
                </div>
                <div onClick={props.onMinusClick} className={classes.plus}>
                  <p>-</p>
                </div>
              </div>
              <div className={classes.price}>
                <h3>$ {props.activeOrderItem.price} </h3>
              </div>
            </div>
            <div className={classes.buttonContainer}>
              <Button
                title={props.editMode ? "SAVE CHANGES" : "ADD TO CART"}
                onClick={props.onAddToCartClick}
                width={"70%"}
              />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default OrderDetailsModal;
