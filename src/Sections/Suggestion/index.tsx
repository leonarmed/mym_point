import { useState, forwardRef } from "react";
import { Paper, Typography, Grid, Button, Box, Stack, Snackbar } from "@mui/material";
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import CustomInputForm from "../../components/Form/CustomInputForm";
import DiagonalSeparator from "../../components/DiagonalSeparator";
import BackdropLoader from "../../components/BackdropLoader";
import { ResetTvRounded } from "@mui/icons-material";

type FormProps = {
    email: string;
    msg: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function Suggestion() {
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [openSnackBar, setOpenSnackBar] = useState({open:false,msg:"", state:""});
    const validationSchema = Yup.object().shape({
        msg: Yup.string().required("¿Cuál sería su sugerencia?"),
        email: Yup.string()
            .required('Por favor introducir su correo')
            .email('Por favor introducir un correo válido'),
    });

    const handleCloseBackdrop = () => {
        setOpenBackdrop(false);
    };
    const handleToggleBackdrop = () => {
        setOpenBackdrop(!openBackdrop);
    };

    const {
        register,
        handleSubmit,
        reset,
        control,
        formState: { errors },
      } = useForm<FormProps>({
        resolver: yupResolver(validationSchema)
      });

    const methods = useForm({
        resolver: yupResolver(validationSchema),
    });

    async function onSendSubmit(data: any) {
        handleToggleBackdrop();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": data.email,
            "text": data.msg
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        await fetch("https://mympoint-api.herokuapp.com/api/mail", requestOptions)
        .then(
            response => response.text()
        )
        .then(
            result => {setOpenSnackBar({open:true, state:"success", msg:"El correo fue enviado satisfactoriamente"});reset({email:"", msg:""})}
        )
        .catch(
            error => {setOpenSnackBar({open:true, state:"error" ,msg:"No fue posible enviar el correo, por favor intentar nuevamente"})}
        );
        handleCloseBackdrop();
    }
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenSnackBar({open:false,msg:"",state:""});
    };

    return (
        <Box className="section">
            {openBackdrop && <BackdropLoader />}
            <DiagonalSeparator />
            <Typography variant={"h4"} color="#cd26af">
                Buzón de sugerencias
            </Typography>
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar open={openSnackBar.open} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{horizontal:"center", vertical:"top"}}>
                    <Alert onClose={handleClose} severity={openSnackBar.state==="error" ? "error" : "success"} sx={{ width: '100%' }}>
                    {openSnackBar.msg}
                    </Alert>
                </Snackbar>
            </Stack>
            <Paper
                elevation={10}
                component="form"
                role="form"
                onSubmit={handleSubmit(onSendSubmit)}
                className="form-container"
            >
                <Grid container>
                    <Grid item xs={12} p={2}>
                        <CustomInputForm
                            name="email"
                            control={control}
                            error={errors.email}
                            label="Correo electrónico"
                        />
                    </Grid>
                    <Grid item xs={12} p={2} >
                        <CustomInputForm
                            name="msg"
                            control={control}
                            error={errors.msg}
                            label="Sugerencia"
                            multiline
                            rows={3}
                        />
                    </Grid>
                    <Grid item xs={12} p={2} display="flex" justifyContent="center">
                        <Button type="submit" variant="outlined" color="secondary">
                            Enviar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}
