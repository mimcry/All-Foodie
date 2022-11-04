
import { Paper, CardActionArea, CardContent, CardMedia, Typography,Card,Box, CardHeader,IconButton } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function  Fooditem({ name, image, category}) {
  const deleteHandeler = (id) => {const test= data?.filter(items=>items.id!==id);
    setData(test)
    alert("Your food is deleted")
   }
  return (
    <Paper elevation={24}
      sx={{
        maxWidth: 210,
        maxHeight:258,
       
        borderRadius:"25px",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
    
    >
    
      <CardActionArea className="mb-5">
      <CardHeader
                      action={
                        <IconButton aria-label="add to favorites">
                        <DeleteIcon sx={{color:"white",mt:"-25px",  }} onClick={deleteHandeler}    />
                      </IconButton>
                      }
                     
                    />
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="food item"
          sx={{
            mt:"-55px"
          }}
        />         
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color:"black",fontFamily:"mono-space"}}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
       {category}
          </Typography>
        </CardContent>
      </CardActionArea >
    </Paper>
  );
}

export default Fooditem;
