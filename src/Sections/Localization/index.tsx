import React from "react";
import { Box, Grid, Typography, Divider, Paper, Stack, Button } from "@mui/material";
import { LocationOn, WhatsApp, AddLocationAlt } from "@mui/icons-material";
import PaseoGaleria from "../../assets/img/paseo-galeria.jpeg"
import PlazaMadero from "../../assets/img/plaza-madero.jpeg"

const center = {
    lat: -25.284865,
    lng: -57.563197
};

export default function Localiation() {
  return (
    <Box mt={5} className="section">
      <Typography variant={"h4"} color="white" > 
        ... y ahora estamos más cerca de ti
      </Typography>
      <Typography variant={"h6"} color="white" ml={6}> Tenemos una nueva sucursal en Plaza Madero</Typography>
      <Grid container sx={{display:"flex", justifyContent:"center"}}>
          <Grid item xs={12} sm={6} md={6} lg={4}>
              <Paper elevation={8} sx={{padding:"10px", margin:"10px"}}>
                <Typography variant={"h5"} mb="10px" >
                  Shopping Paseo la Galería
                  <Divider/>
                </Typography>
                <Box className="img-container" sx={{display: "flex", justifyContent: "center", padding: "10px"}}>
                  <img src={PaseoGaleria} width="80%" alt="Shopping Paseo La Galería"/>
                </Box>
                <Typography variant={"body1"} p={1} minHeight="94px">
                  <LocationOn /> Av. Aviadores del Chaco con Av. Santa Teresa, Shopping Paseo La Galería, local S-1 103A, al lado de Punto Farma.
                </Typography>
                <Stack direction="row" spacing={2} display="flex" justifyContent="center">
                  <Button color="secondary" variant="outlined" sx={{fontSize:".6rem"}} startIcon={<AddLocationAlt />} href="https://www.google.com/maps/dir/-25.2844731,-57.5625884/M%26M+Point,+Av.+Aviadores+del+Chaco+con+Av.+Santa+Teresa+Shopping+Paseo+La+Galer%C3%ADa,+S-1,+Local+103A,+1410/@-25.2853287,-57.5636013,21z/data=!4m17!1m6!3m5!1s0x0:0xa53427f368722024!2sM%26M+Point!8m2!3d-25.2853307!4d-57.5634978!4m9!1m1!4e1!1m5!1m1!1s0x945da93b4db2a88d:0xa53427f368722024!2m2!1d-57.5634978!2d-25.2853307!3e0#:~:text=M%26M-,Point,-Av.%20Aviadores%20del" target="_blank">
                    ¿Cómo llegar?
                  </Button>
                  <Button color="secondary" variant="outlined" sx={{fontSize:".6rem"}} startIcon={<WhatsApp />} href="https://wa.me/595994343311?text=Hola%20quisiera%20información%20sobre%20" target="_blank">
                    Contáctanos
                  </Button>
                </Stack>
              </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Paper elevation={8} sx={{padding:"10px", margin:"10px"}}>
                <Typography variant={"h5"} mb="10px" >
                    Plaza Madero
                    <Divider />
                </Typography>
                <Box className="img-container" sx={{display: "flex", justifyContent: "center", padding: "10px"}}>
                  <img src={PlazaMadero} width="80%" alt="Shopping Plaza Madero"/>
                </Box>
                <Typography variant={"body1"} p={1} minHeight="90px">
                  <LocationOn />Autopista Silvio Pettirossi, Plaza Madero, Local 23
                </Typography>
                <Stack direction="row" spacing={2} display="flex" justifyContent="center">
                  <Button color="secondary" variant="outlined" sx={{fontSize:".6rem"}} startIcon={<AddLocationAlt />} href="https://www.google.com/maps/place/M%26M+Point+Luque/@-25.2554652,-57.5135703,21z/data=!4m11!1m5!8m4!1e3!2s101505636304094852629!3m1!1e1!3m4!1s0x945da5febc95887d:0xe688ec398e1c9113!8m2!3d-25.2554543!4d-57.5134431" target="_blank">
                    ¿Cómo llegar?
                  </Button>
                  <Button color="secondary" variant="outlined" sx={{fontSize:".6rem"}} startIcon={<WhatsApp />} href="https://wa.me/595994133311?text=Hola%20quisiera%20información%20sobre%20" target="_blank">
                    Contáctanos
                  </Button>
                </Stack>
            </Paper>
          </Grid>
      </Grid>
    </Box>
  )
}
