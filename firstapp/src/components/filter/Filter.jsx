import React from "react";
import classes from "./filter.module.css";

const Filter = ({value,setValue}) => {
  const options = ["Все", "Пиццы", "Суши", "Гарниры", "Салаты"];
  return (
    <div className={classes.filter}>
      {options.map((option, index) => (
        <h5
          key={index}
          className={`${classes.filter__h5} ${
            index === value ? classes.active : ""
          }`}
          onClick={() => setValue(index)}
        >
          {option}
        </h5>
      ))}
    </div>
  );
};

export default Filter;
