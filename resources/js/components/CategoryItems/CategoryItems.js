import React from "react";
import classes from "./CategoryItems.module.css";

const CategoryItems = (props) => {
  return (
    <div
      onClick={(id) => props.onCatClick(props.item.Id)}
      style={{
        background: props.activeId !== props.item.Id ? "white" : "#FFDA6C",
      }}
      className={classes.container}
    >
      <div className={classes.image}>
        <img src={props.item.img} alt={props.item.name} />
      </div>
      <div className={classes.name}>{props.item.name}</div>
    </div>
  );
};

export default CategoryItems;
