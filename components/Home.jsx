import React from "react";

import { Box, Grid, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PhoneIcon from "@mui/icons-material/Phone";
import NearMeIcon from "@mui/icons-material/NearMe";
const Home = () => {
  return (
    <div className="container">
 
        <Grid sx={{ display: "flex",mb:4 }}>
          <Grid item lg={6} md={6}>
            <Typography sx={{ mt: "100px" }}>
              <Typography
                sx={{ display: "flex", fontSize: "2.5rem", lineHeight: "55px" }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: "2.5rem", lineHeight: "55px" }}
                >
                  {" "}
                  Giving{" "}
                </Typography>{" "}
                <Typography
                  sx={{ ml: 1, fontSize: "2.5rem", lineHeight: "55px" }}
                >
                  your
                </Typography>
                <Typography
                  sx={{
                    color: "#df2020",
                    ml: 1,
                    fontSize: "2.5rem",
                    lineHeight: "55px",
                    
                  }}
                >
                  {" "}
                  HUNGRY
                </Typography>
              </Typography>
              <Typography
                sx={{ display: "flex", fontSize: "2.5rem", lineHeight: "55px" }}
              >
                a
                <Typography
                  sx={{
                    color: "#df2020",
                    ml: 1,
                    fontSize: "2.5rem",
                    lineHeight: "55px",
                    
                  }}
                >
                  New{" "}
                </Typography>{" "}
                <Typography
                  sx={{ ml: 1, fontSize: "2.5rem", lineHeight: "55px" }}
                >
                  Option
                </Typography>
              </Typography>{" "}
            </Typography>

            <Typography
              varient="p"
              sx={{ fontSize: "1rem", lineHeight: "30px", color: "#777" }}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
              maxime quasi aliquam qui et harum eos sequi dignissimos. Dolorum,
              officiis. Fugit est quia atque cumque! Praesentium et neque rerum
              saepe
            </Typography>
          
              {" "}
              <IconButton  sx={{
                background: "#df2020",
                color: "#fff",
                padding: "7px 20px",
                cursor: "pointer",
                fontSize:"1rem",
                borderRadius:"20px",mt:2,"&:hover": {
                  backgroundColor: ' #452121',
                  transform: "translatex(4px)",
                }
              }} >
                See all foods <ArrowForwardIosIcon className="p-1 mt-1" />
              </IconButton>
              <Grid className="mt-4" container spacing={5}>
        <Grid item>
          <Typography sx={{ mb: 1, color: "red", marginLeft: "40px",cursor:"pointer" }}>
            <AccessTimeIcon />
          </Typography>
          <Typography sx={{fontSize:"1.2rem"}}> 10am-9pm</Typography>{" "}
          <Typography sx={{ textAlign: "center", color: "#777" }}>
            Opening Time
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ mb: 1, color: "red", marginLeft: "20px",cursor:"pointer" }}>
            <NearMeIcon />
          </Typography>
          <Typography sx={{fontSize:"1.2rem"}}>Dhulikhel</Typography><Typography sx={{ textAlign: "center", color: "#777" }}>
            Location
          </Typography>
        </Grid>
        <Grid item>
          <Typography sx={{ mb: 1, color: "red", marginLeft: "30px",cursor:"pointer" }}>
            <PhoneIcon />
          </Typography>
          <Typography sx={{fontSize:"1.2rem"}}>9860428022</Typography>
          <Typography sx={{ textAlign: "center", color: "#777" }}>
            Foodie Call
          </Typography>
        </Grid>
      </Grid>
          </Grid>
          <Grid item lg={6} md={6} xs={12} >
            {" "}
            <Box
              component="img"
              src="delivery1.jpg"
              alt="delivery"
              sx={{
                width: "700px",
                height: "500px",
          
                ml:35,
               
                display: { md: "none", xs: "none",lg:"flex"}, 
              }}
            />
          </Grid>{" "}
        </Grid>
   
    </div>
  );
};

export default Home;
