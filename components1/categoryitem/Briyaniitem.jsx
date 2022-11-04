

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { Divider, Grid,Fab ,Typography} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Page from "./Page";
import Fooditem from "./Fooditem";
import Category from "./Category";
import Addcategory from "../categoryitem/Addcategory"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 700,
  bgcolor: "white",
  border: "2px solid #000",
  borderRadius: "50px",
  boxShadow: 24,
  p: 4,
};


export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
   
  const [data, setData] = useState([ {
      id: 1,
      title: "Chicken",
      image:
        "https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72651.jpg?w=1060&t=st=1667551237~exp=1667551837~hmac=17d57645f645d981ff78f7f6d97134b021b281ccc9fbfa60e7a8122af9a0d4b1",
      price: "Rs250",
      subtitle: "biryani",
    },
    {
      id: 2,
      title: "Veg",
      image:
        "https://img.freepik.com/free-photo/tomato-rice-also-known-as-tamatar-pilaf-pulav-made-using-basmati-rice-served-bowl-selective-focus_466689-75281.jpg?w=1060&t=st=1667551283~exp=1667551883~hmac=4ac864dda11e5e658809f2910d9e1f581b0ea775b9bd9154bd0e503cfd88fa8d",
      price: "Rs250",
      subtitle: "biryani",
    },
    {
      id: 3,
      title: "Mutton",
      image:
        "https://img.freepik.com/free-photo/mutton-lamb-biriyani-with-basmati-rice-served-bowl-moody-background_466689-72652.jpg?w=1060&t=st=1667551356~exp=1667551956~hmac=62af038031a81bc65598704cd83deca7d0c6810969e9d73aeaf5d4bd13592363",
      price: "Rs250",
      subtitle: "biryani",
    },
    {
      id: 4,
      title: "Fish",
      image:
        "https://as1.ftcdn.net/v2/jpg/05/17/97/04/1000_F_517970489_ug6mzjOFZvEChlqqXZeF27XjUtcXQ6HK.jpg",
      price: "Rs250",
      subtitle: "biryani",
    },
    {
      id: 5,
      title: "Mattka",
      image:
        "data:image/jpeg;base64,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",
      price: "Rs250",
      subtitle: "biryani",
    },
    {
      id: 6,
      title: "Bamboo",
      image:
        "http://www.bamboobiryani.my/images/food-2.jpg",
      price: "Rs250",
      subtitle: "biryani",
    },
    {
      id: 7,
      title: "Buff",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "Rs250",
      subtitle: "Fried momo",
    },
    {
      id: 8,
      title: "Buff",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "Rs250",
      subtitle: "Steam ",
    },
    {
      id: 9,
      title: "Buff",
      image:
        "https://img.taste.com.au/mdKxKxoR/taste/2016/11/chicken-momos-with-tomato-achar-46671-1.jpeg",
      price: "Rs250",
      subtitle: "C momo",
    },])
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  
 
  const deleteHandeler = (id) => {const test= data?.filter(items=>items.id!==id);
    setData(test)
    alert("Your food is deleted")
   }
const additem = ()=>{
  alert("clicked icon!")

}
 
  return (
    <div> 
      <Button onClick={handleOpen}>
      <Fooditem 
name="Briyani"
image="https://img.freepik.com/premium-photo/dum-handi-muttona-biryania-gosht-pilaf-is-prepared-earthen-clay-pot-called-haandi-1-kilo-size-popular-indian-non-vegetarian-fooda_466689-52330.jpg?w=1060"
category="Visit the various Briyani"/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Page name="Momo" />

          <Divider orientation="vertical"></Divider>

          <Box sx={{ display: "flex" }}>
            <Grid container spacing={0}>
              {data.map((data) => (
                <Grid item lg={2} md={4} xs={6}>
                      
                  <Category
                    title={data.title}
                    image={data.image}
                    price={data.price}
                    subtitle={data.subtitle}
                    deleteHandeler={() => deleteHandeler(data.id)}
                  />
                 
                </Grid>
                
              ))}{" "}
              
              <div>
              <Addcategory data={data} setdata={setData}/>

              </div>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
