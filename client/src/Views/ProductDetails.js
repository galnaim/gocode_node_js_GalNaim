// import ProductContext from "../contexts/ProductContext";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ExpandMore from "@mui/icons-material/ExpandMore";
// import CardActionArea from "@mui/material/CardActionArea";



export default function ProductDetails({ expanded, handleExpandClick }) {
  const [isItLoading, setisItLoading] = useState([true]);

  const { dynamicProductID } = useParams();

  const [productObj, setproductObj] = useState({});

  useEffect(() => {
    fetch(`/api/products/${dynamicProductID}`)
      .then((res) => res.json())
      .then((productObj) => {
        setproductObj(productObj);
        setisItLoading(false);
      });
  }, [dynamicProductID]);

  return (
    
    isItLoading ? 
      (<h1>Loading Your Choice...</h1>)
         :
          (
        
      <React.Fragment className="productDetailswraper">
      <Card sx={{ maxWidth: 800, ml: 24, my: 1}}>
        <CardHeader
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title={productObj.title}
          subheader={productObj.category}
        />

        <CardMedia
          component="img"
          height="600"
          image={productObj.image}
          alt={productObj.title}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {productObj.description}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton> */}
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Heat 1/2 cup.</Typography>
            <Typography paragraph>Heat oil .</Typography>
            <Typography paragraph>Add rice and</Typography>
            <Typography>Set aside and then serve.</Typography>
          </CardContent>
        </Collapse>
      </Card>
                <br />
                <Link className="homeLink" to="/">
                  Home Page
                </Link>
                <br/>
                <Link className="aboutLink" to="/about">
                  about
                </Link>
                
    </React.Fragment>
    )
  );
}