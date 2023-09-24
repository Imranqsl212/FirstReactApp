import React from "react";
import "./price.css";

const Price = ({ sortingOrder, setSortingOrder }) => {
  const handleSortingChange = (e) => {
    setSortingOrder(e.target.value);
  };

  return (
    <div className="radio-inputs">
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value=""
          checked={sortingOrder === "all"}
          onChange={handleSortingChange}
        />
        <span className="name">Default</span>
      </label>
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="desc"
          checked={sortingOrder === "desc"}
          onChange={handleSortingChange}
        />
        <span className="name">More to Less</span>
      </label>
      <label className="radio">
        <input
          type="radio"
          name="radio"
          value="asc"
          checked={sortingOrder === "asc"}
          onChange={handleSortingChange}
        />
        <span className="name">Less to More</span>
      </label>
    </div>
  );
};

export default Price;
