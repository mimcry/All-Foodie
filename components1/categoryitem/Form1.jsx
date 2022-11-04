import React from "react";
import { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
const Form = ({data,setdata,open,setopen}) => {
  const { setCombos, setShowSnackBar } = useState("");
  const[formdata, setformdata] = useState({});
  console.log(data.length)
  const onchange=(e)=>{
   
    const name = e.target.name
    const value = e.target.value
 
    const data ={... formdata}
    
    data [name]=value
   
    setformdata(data)
    
  }
  const save =()=>{
   console.log(formdata)
   formdata["id"] = parseInt(data?.length )+1
   setdata(data=>([...data, formdata]))
   setopen(!open)
  }
  const [file, setfile] = useState();
console.log(data)
  return (
    <div>
      <form  >
      <Box >
        <Typography sx={{ textAlign: "center ", mb: 4 }} >
     Category To Be Added
        </Typography>
        <Typography>
          {" "}
          Title: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="Food Title"
            variant="outlined"
            placeholder="..."
            onChange={onchange}
            name='title'
          />
        </Typography>
        <Typography sx={{ mt: 1, Align: "center" }}>
          {" "}
          Subtitle: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="Food Subtitle"
            variant="outlined"
            placeholder="...."
           onChange={onchange}
           name='price'
          />
        </Typography>
        
        <Typography>
          {" "}
        Image Url: <br />
          <TextField
            sx={{ mt: 1 }}
            id="outlined-basic"
            label="url"
            variant="outlined"
            placeholder="https://wwww.photo.com"
            onChange={onchange}
            name='image'
          />  </Typography>
        <Button  onClick={save} sx={{ ml: 15, mt: 2 }} variant="outlined" color="error" >
       <Typography sx={{fontWeight:550}}>  Save</Typography>
        </Button>
      </Box></form>
    </div>
  );
};

export default Form;
