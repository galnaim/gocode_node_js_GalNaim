import "./Header.css";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import ProductContext from "../../contexts/ProductContext"

function valuetext(value) {
  return `${value}°C`;
}

const Header = ({ categories, ViewFiltered }) => {

const { fixedArray } = useContext(ProductContext);


function findExtremePrices(arr){
const sortPrices = arr.sort(function (a,b){
  if (a.price > b.price){return 1}
  else if (a.price<b.price) {return -1}
  else {return 0}
})
const extremePrices = [sortPrices[0], sortPrices[sortPrices.length-1]];
return extremePrices;
}
findExtremePrices(fixedArray);


  const [value, setValue] = React.useState([6, 665]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <nav className="product-filter">

<Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
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
