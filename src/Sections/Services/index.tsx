import { Box, Grid, Typography } from "@mui/material";
import CustomCard from "../../components/CustomCard";
import { AssignmentInd, MenuBook, Scanner, Accessible } from "@mui/icons-material";
import CopyService from "../../assets/img/copy.jpg";
import BindingService from "../../assets/img/notebook.jpg";
import LabeledService from "../../assets/img/rotulado.jpeg"
import PlasticizedService from "../../assets/img/plastificado.jpeg"

export default function Services() {
  return (
    <Box mt={5} className="section">
        <Typography variant={"h4"} color="#cd26af"> Nuestros servicios </Typography>
        <Grid container>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomCard icon={<MenuBook />} bgColorIcon="#6e2ed0" title={"Encuadernado"} description={"Variedad de colores en tapas y tamaños de anillado."} urlImgService={BindingService} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomCard icon={<Scanner />} bgColorIcon="#f100c7" title={"Impresión | Copias | Escaneo"} description={"Ofrecemos la mejor calidad de impresión envariedad de hojas y tamaños."} urlImgService={CopyService} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomCard icon={<Accessible />} bgColorIcon="#3dbbb8" title={"Rotulado | Stickers | Ploteo"} description={"Diseños personalizados, elige el color, el diseño y nosotros hacemos el resto."} urlImgService={LabeledService} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <CustomCard icon={<AssignmentInd />} bgColorIcon="#70ce84" title={"Plastificado"} description={"Protege tus documentos de la mejor manera."} urlImgService={PlasticizedService} />
            </Grid>
        </Grid>
    </Box>
  )
}
