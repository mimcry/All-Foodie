import { Avatar, Box, Card, CardActions, Rating, Typography,Paper } from '@mui/material'
import {grey} from '@mui/material/colors'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const UserReviewWallCard = ({item}) => {
    return (
<Box sx={{mt:-1}}>    
    
<Paper elevation={14} sx={{height: 185, width: 405,borderRadius:5,bgcolor:" white"}}> <Box sx={{mt:12,cursor:"pointer",
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 2, position: 'relative',
             borderRadius:5,height: 180, width: 400, p: 2, background:'linear-gradient(to right, #f5a9ba, #e07b69)'
        }}>
            
           <Paper elevation={24} sx={{height: '100px', width: '100px',mt:-11, borderRadius:"325px", bgcolor:" white",}}> <Avatar alt={item.alt} src={item.src}
                sx={{mt:0.5, height: '100px', width: '100px', boxShadow:3 ,ml:"5px", position:'absolute', zItems:100, top:-62.5,}}
            /></Paper>
            <Rating name='read-only' value={item.value} sx={{ borderBottom: 3, borderColor: '#fff', }} readOnly />
           
            <Typography align='center'  sx={{  fontSize: '20px', fontWeight: 'regular', color: grey[200], fontStyle:'italic' }}> {item.content} </Typography>

        </Box></Paper>
        </Box>    
    )
}

export default UserReviewWallCard


