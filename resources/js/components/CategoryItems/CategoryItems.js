import React from "react";
import classes from "./CategoryItems.module.css";

const CategoryItems = (props) => {
  return (
    <div
      onClick={(id) => props.onCatClick(props.item.id)}
      style={{
        background: props.activeId !== props.item.id ? "white" : "#FFDA6C",
      }}
      className={classes.container}
    >
      <div className={classes.image}>
        <img src={props.item.image} alt={props.item.name} />
      </div>
      <div className={classes.name}>{props.item.name}</div>
    </div>
  );
};

export default CategoryItems;
