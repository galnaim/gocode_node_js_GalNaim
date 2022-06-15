import "./Header.css";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
import React, { useState } from "react";
// import ProductContext from "../../contexts/ProductContext";

function valuetext(value) {
  return `${value}°C`;
}

const Header = ({ categories, ViewFiltered, handleChange,value, mostExpensiveObj, leastExpensiveObj}) => {
  

  return (
    <nav className="product-filter">
      <Box sx={{ width: 250, margin: 5 }}>
        <Slider
          max={mostExpensiveObj}
          min={leastExpensiveObj}
          getAriaLabel={() => "Price range"} //Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider. This is important for screen reader users.
          value={value} //The value of the slider. For ranged sliders, provide an array with two values.
          onChange={handleChange}
          valueLabelDisplay="auto" //Controls when the value label is displayed:- auto the value label will display when the thumb is hovered or focused. - on will display persistently. - off will never display.
          getAriaValueText={valuetext} //funktzia, Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider. This is important for screen reader users.
        />
      </Box>
      <div className="sort">
        <div className="collection-sort">
          <label>Filter by:</label>

          <select
            onChange={(e) => {
              let selectedCategory = e.target.value;
              ViewFiltered(selectedCategory);
            }}
          >
            <option>--Choose an option--</option>
            {categories.map((Category, index) => (
              <option key={index}>{Category}</option>
            ))}
          </select>
        </div>

        <div className="collection-sort">
          <label>Sort by:</label>
          <select>
            <option value="/">Featured</option>
            <option value="/">Best Selling</option>
            <option value="/">Alphabetically, A-Z</option>
            <option value="/">Alphabetically, Z-A</option>
            <option value="/">Price, low to high</option>
            <option value="/">Price, high to low</option>
            <option value="/">Date, new to old</option>
            <option value="/">Date, old to new</option>
          </select>
        </div>
      </div>
    </nav>
  );
};
export default Header;