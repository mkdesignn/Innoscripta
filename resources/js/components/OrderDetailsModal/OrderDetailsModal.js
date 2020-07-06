import React from "react";
import Modal from "../Modal/Modal";

const OrderDetailsModal = (props) => {
  return (
    <Modal width={"60%"} height={"70vh"} show={props.show} close={props.close}>
      OrderDetailsModal
    </Modal>
  );
};

export default OrderDetailsModal;
