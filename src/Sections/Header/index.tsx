import React from "react";
import { Box, Typography } from "@mui/material";
import ReactCompareImage from "react-compare-image";
import Galeria from "../../assets/img/galeria.jpg";
import Madero from "../../assets/img/madero.jpg";
import Logomym from "../../assets/logo/logo.png"
import Logogbc from "../../assets/logo/gbc.png"

export default function Header() {
  return (
    <Box className="slider-container">
      <ReactCompareImage
        leftImage={Galeria}
        rightImage={Madero}
        sliderPositionPercentage={0.95}
        hover={true}
        skeleton={<h4>Cargando</h4>}
      />
      <div className="shadow1"></div>
      <div className="shadow2"></div>
      <div className="shadow3"></div>
      <div className="shadow4"></div>
      <Box sx={{
        color: "white",
        zIndex: "11",
        top:"45%",
        width:"100%",
        position:"absolute",
        textAlign:"center"
      }}
      className="title-header">
        <Typography variant="h4" fontSize={25} p={0}>
          ¡Más que una librería, un espacio para vos!
        </Typography>
      </Box>
      <Box className="logo-developed" textAlign={"center"}>
        <img src={Logomym} width="150px" alt="Logo M&M Point" />
        <div className="developedBy">
          <Typography variant={"body1"}>Developed by</Typography>
          <img src={Logogbc} width="100px" alt="Logo M&M Point" />
        </div>
      </Box>
    </Box>
  )
}
