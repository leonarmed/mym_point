import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import GBCWhite from "../../assets/logo/gbc-white.png"

export default function index() {
    const currentTime = new Date();
    const year = currentTime.getFullYear()
  return (
  <>
    <Box sx={{minHeight:"150px", backgroundColor:"#CD26B2", position:"relative"}} className="section">
        <div className="custom-shape-divider-top-1649105813">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
    </Box>
    <Box position={"relative"} marginTop={"-80px"} marginLeft={"20px"}>
        <Grid container className="footer">
            <Grid item xs={6} sx={{display:"flex", alignItems:"center"}}>
                <Typography variant='body2'sx={{marginRight:"5px", color:"white"}}>© {year} - <a className="hyperlink" href="https://www.mympoint.com">M&M Point</a> | Developed by </Typography>
                <img src={GBCWhite} width="90" alt="Global Bridge Connections"/>
            </Grid>
            <Grid item xs={6} sx={{display:"flex", flexFlow:"column", alignItems:"self-end", paddingRight:"20px", color:"white"}}>
                <Typography variant="h4" fontSize={20} p={0}>
                    M&M Point
                </Typography>
                <Typography variant="h4" fontSize={20} p={0}>
                    ¡Más que una librería, un espacio para vos!
                </Typography>
            </Grid>
        </Grid>
    </Box>
  </>
  )
}
