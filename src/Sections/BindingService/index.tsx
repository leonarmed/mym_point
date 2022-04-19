import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { StarBorderPurple500 } from "@mui/icons-material";
import Banner from "../../assets/img/BindingService.png"
import SeparatorColor from "../../components/SeparatorColor";
import Localiation from "../Localization";

export default function Services() {
  return (
    <Box>
      <SeparatorColor />
      <div className="banner-container section">
      <Typography variant={"h4"} color="white" >
        Diseños exclusivos
      </Typography>
      <Typography variant={"h6"} color="white" ml={6}> 
        en Tarjetas de Presentación, Flyers, Banners, Vinilos y mucho más
      </Typography>
      <Box display="flex" justifyContent="center" >
        <img src={Banner} alt="Servicios de ploteo en Paraguay"/>
      </Box>
      <Localiation />
      </div>
      <Divider sx={{backgroundColor:"#781084", paddingBottom:"10px"}}><StarBorderPurple500 /></Divider>
    </Box>
  )
}
