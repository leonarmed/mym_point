import { Backdrop, Typography } from '@mui/material';
// import CircularProgress from '@mui/material/CircularProgress';
import preloader from "../../assets/img/preloader.gif"

export default function SimpleBackdrop() {
  return (
    <div>
      <Backdrop
        sx={{ display:"flex", flexFlow:"column", backgroundColor:"rgb(255 255 255 / 83%)", color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
         <Typography variant={"h4"} color="#cd26af">
            Cargando
          </Typography>
        <img src={preloader} alt="loading" />
        {/* <CircularProgress color="inherit" /> */}
      </Backdrop>
    </div>
  );
}
