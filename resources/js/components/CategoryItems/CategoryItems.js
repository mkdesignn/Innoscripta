import React from "react";
import classes from "./CategoryItems.module.css";

const CategoryItems = (props) => {
    return (
        <div
            onClick={(id) => props.onCatClick(props.item.id)}
            style={{background: props.activeId !== props.item.id ? "white" : "#FFDA6C"}}
            className={classes.container}
        >
            <div className={classes.image}>
                <img src={props.item.image} alt={props.item.name}/>
            </div>
            <div
                style={{color: props.activeId !== props.item.id ? "rgba(94, 91, 91, 0.24)" : "black"}}
                className={classes.name}
            >{props.item.name}</div>
        </div>
    );
};

export default CategoryItems;
