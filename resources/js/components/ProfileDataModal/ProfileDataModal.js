import React from "react";
import Modal from "../Modal/Modal";
import classes from "./ProfileDataModal.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import ClipLoader from "react-spinners/ClipLoader";

const ProfileDataModal = (props) => {
    return (
        <Modal
            width={"50%"}
            padding={"0"}
            show={props.show}
            close={props.close}
        >
            <div className={classes.container}>
                <div className={classes.top}>
                    <div className={classes.header}>
                        <h5 style={{"display": props.succsessOrder ? 'none' : ''}}>Fill the form below to continue</h5>
                    </div>
                </div>
                <div className={classes.bottom}>
                    {!props.loading ? (
                        !props.succsessOrder ? (
                            props.errors && props.errors.length > 0 ? (
                                <div className={classes.successOrder}>
                                    <h4>{props.errors}</h4>
                                    <div className={classes.buttonContainer}>
                                        <Button
                                            title={"OK"}
                                            onClick={props.closeError}
                                            width={"30%"}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <Input
                                        name="name"
                                        onChange={props.onChangeHandler}
                                        type="text"
                                        lable={"Name"}
                                        placeholder={"Enter Your Name"}
                                    />
                                    <Input
                                        name="surname"
                                        onChange={props.onChangeHandler}
                                        type="text"
                                        lable={"Surname"}
                                        placeholder={"Enter Your Surname"}
                                    />
                                    <Input
                                        name="address"
                                        onChange={props.onChangeHandler}
                                        type="text"
                                        lable={"Address"}
                                        placeholder={"Enter Your Address"}
                                    />
                                    <div className={classes.buttonContainer}>
                                        <Button
                                            title={"Order"}
                                            onClick={props.onProfileDataOrderClick}
                                            width={"70%"}
                                        />
                                    </div>
                                </>
                            )
                        ) : (
                            <div className={classes.successOrder}>
                                <h4>Your order has been completed successfully, order code: {props.data.code}</h4>
                                <div className={classes.buttonContainer}>
                                    <Button title={"OK"} onClick={props.close} width={"30%"}/>
                                </div>
                            </div>
                        )
                    ) : (
                        <div className={classes.loading}>
                            <ClipLoader
                                sizeUnit={"px"}
                                size={50}
                                color={"rgb(255, 218, 108)"}
                                loading={props.loading}
                            />
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
};

export default ProfileDataModal;
