import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UserReviewWallCard from "./UserReviewWallCard";
import { Box, Typography,Grid,Paper } from "@mui/material";
import { fontSize } from "@mui/joy/styles/styleFunctionSx";

const settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
  cssEase: "ease-in-out",
  variableWidth: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        variableWidth: false,
       
        cssEase: "ease-in-out",
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        variableWidth: true,
        cssEase: "ease-in-out",
      },
    },
  ],
};

const dataSet = [
  {
    alt: "Stephen Curry",
    src: "ava1.jpg",
    value: "5",
    content: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deserunt.'",
  },
  {
    alt: "Stephen Curry",
    src: "ava2.jpg",
    value: "5",
    content: "'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deserunt.'",
  },
  {
    alt: "Stephen Curry",
    src: "ava3.jpg",
    value: "5",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deserunt.",
  },
  {
    alt: "Stephen Curry",
    src: "ava4.jpg",
    value: "5",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deserunt.'",
  },
  {
    alt: "Stephen Curry",
    src: "avatar.jpg",
    value: "5",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, deserunt.",
  },
];

function Carousel() {
  const [items, setItems] = useState();

  return (
    <div className="container">
          <Box><Typography variant="h5" sx={{ textAlign: "center", mb: 5, fontSize: "2.5rem",color:"#df2020" }}>
   Foodies's 
   
          <Typography variant="span" sx={{color:"black",ml:2 }}>
            Customer Review
          </Typography>
        </Typography></Box>
     <Paper elevation={20} sx={{ border:"2px solid white", borderRadius:"25px",   background:'linear-gradient(to top,#fde4e4,#fde4e4,white)',mb:9,mt:-2
 }}>
 
      <Slider {...settings}>
        {dataSet.map((item) => (
         
          <Box 
            sx={{mt:-2,
              height: 290,
              width: 300,
              display: "flex",
              alignItems: "flex-end",
              mx: 1.5,
             
            }}
      
          >
            <UserReviewWallCard item={item} />
          </Box>
        ))}
      </Slider></Paper>
    </div>
  );
}

export default Carousel;
