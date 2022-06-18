import "./Header.css";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
// import React, { useState } from "react";
// import ProductContext from "../../contexts/ProductContext";

const Header = ({
  categories,
  ViewFiltered,
  value,
  setValue,
  mostExpensiveObj,
  leastExpensiveObj,
  adjustFiltereBySlide,
}) => {
  function valuetext(value) {
    return `${value}Dollars`;
  } //translates the value to numbers for the user

  const handleChange = (event, newValue) => {
    setValue(newValue);
    adjustFiltereBySlide(value);
  }; // seting the value


  return (
    <nav className="product-filter">
      <Box sx={{ width: 300 }}>
        <Slider
          min={Math.floor(leastExpensiveObj)} //The maximum allowed value of the slider.
          max={Math.ceil(mostExpensiveObj)} //The minimum allowed value of the slider.
          getAriaLabel={() => "Temperature range"} //translat the thumb labels of the slider for the user.
          value={value} //The value of the slider.  provide an array with two values.
          onChange={handleChange} // listening to the change and activating the func that sets the value.
          valueLabelDisplay="auto"
          getAriaValueText={valuetext} // activates the func that translates the value to numbers for the user
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
