import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useState} from "react";

function valuetext(value) {
  return `${value}°C`;
}

export default function About() {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (
    <>
    <Box sx={{ width: 300 }}>
      <Slider
      max = {76}
      min ={3}
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>


      <div className="aboutLink">About my site....</div>
      <br />
      <Link className="homeLink" to="/">
        Home Page
      </Link>
    </>
  );
}
