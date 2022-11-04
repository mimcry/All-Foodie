import React from "react";
import {
  Card,
  Box,
  Paper,
  Typography,
  IconButton,
  CardHeader,
  Button,
  Grid
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Category = ({title,price,image,subtitle,deleteHandeler}) => {
 
 
  return (
    <div className="container" onclick="createDiv(this)">
    
                <Paper elevation={24} sx={{ maxWidth: 200, maxHeight: 300,borderRadius:"30px",transition: "0.4s",
              "&:hover": {
                transform: "translateY(10px)",
              }, }}>
                  <Card
                    sx={{
                      maxWidth: 800,
                      maxHeight: 300,
                      mt: 4,
                      border: "2.9px solid black",
                      borderRadius:"30px"
                    }}
                  >
                    {" "}
                    <CardHeader
                      action={
                        <IconButton aria-label="add to favorites">
                        <DeleteIcon onClick={deleteHandeler}/>
                      </IconButton>
                      }
                      title={title}
                      subheader={subtitle}
                    />
                    <Typography
                      sx={{ height: "50px", width: "100px", cursor: "pointer",mt:1 }}
                    >
                      <img src={image} alt="" className="category__img" />
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <div>
                        <Typography
                          fontSize="lg"
                          fontWeight="lg"
                          sx={{
                            color: "black",
                            mt: 2,
                            ml: 8,
                            fontWeight: 550,
                            fontSize: "1rem",
                            fontFamily:"mono-space",  
                            textAlign:"center"
                          }}
                        >
                          {price}
                        </Typography>
                      </div>
                 
                    </Box>
                  </Card>
                </Paper>
              
    </div>
  );
};

export default Category;
