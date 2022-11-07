
import {
  Grid,
  List,
  ListItemText,
  Typography,
  Button,
  Stack,
  Paper,
 
  Container,
} from "@mui/material";
import { Box } from "@mui/system";

import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <div className="container">
    <Paper  elevation={24}
      sx={{
        background:'radial-gradient(circle,#fde4e4,#fde4e4,white)',
       borderRadius:"20px",
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: '12px', md: '14px' },
        mb:5
      
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
            <Typography><Box component="img"
              src="delivery1.jpg"
              alt="delivery"
              sx={{width: "70px",
              height: "50px",
              borderRadius:"25px"
        }}
            /></Typography>
          <Typography variant="body1" sx={{fontSize:"1.1rem",fontWeight:"600",color:"#212245",mt:2}}>About us</Typography>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>
          <Box
            sx={{
              mt: 4,
             
            }}
          >
            <FacebookIcon sx={{ mr: 1,color:"#df2020",cursor:"pointer"}} />
            <TwitterIcon sx={{ mr: 1,color:"#df2020",cursor:"pointer" }} />
            <InstagramIcon sx={{ mr: 1,color:"#df2020",cursor:"pointer" }}/>
            <LinkedInIcon sx={{ mr: 1,color:"#df2020" ,cursor:"pointer"}}/>
            <YouTubeIcon sx={{color:"#df2020",cursor:"pointer"}} />
          </Box>
        </Grid>
        
        <Grid item md={6} lg={2}>
          <Typography variant="body1" sx={{fontSize:"1.1rem",fontWeight:"600",color:"#212245"}}>Contact</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
               Location: Dhulikhel, Sarsowtibazar
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"#212245"}}>
               Phone:9860428022
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"#212245"}}>
                Email: foodieweb12@gmail.com
              </Typography>
            </ListItemText>
            
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="body1" sx={{fontSize:"1.1rem",fontWeight:"600",color:"#212245"}}>Delivery Time</Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"#212245"}}>
               Sunday - Friday
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
               10:00am - 9:00pm
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"#212245"}}>
                Saturday
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
              Off day
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <Typography variant="body1" sx={{fontSize:"1.1rem",fontWeight:"600",color:"#212245"}}>Information</Typography>
          <List>
           
            <ListItemText>
              <Typography lineHeight={2} variant="caption2"sx={{fontSize:"1rem",fontWeight:"600",color:"#212245"}}>
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2" sx={{fontSize:"1rem",fontWeight:"600",color:"#212245"}}>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Paper></div>
  );
}