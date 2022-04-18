import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
  if (reason === 'clickaway') {
    return;
  }
};

export default function CustomizedSnackbars({open}:any) {
  return (
    <Stack spacing={2} sx={{ width: '100%' }}>

      <Snackbar open={open.open} autoHideDuration={6000} anchorOrigin={{horizontal:"center", vertical:"top"}} onClose={handleClose}>
        <Alert severity={open.state==="success" ? "success" : "error" } sx={{ width: '100%' }}>
          {open.msg}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
