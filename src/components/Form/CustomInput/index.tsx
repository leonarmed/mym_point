import {
  FormControl,
  OutlinedTextFieldProps,
  TextField,
  TextFieldProps,
} from "@mui/material";
import { FieldError } from "react-hook-form";

export interface CustomInputProps extends Omit<TextFieldProps, "error"> {
  error?: FieldError;
}

function CustomInput({ label, error, ...rest }: CustomInputProps) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField
        variant="outlined"
        fullWidth
        label={label}
        margin="dense"
        FormHelperTextProps={{ sx: { fontWeight: "normal", fontSize: 12 } }}
        {...rest}
        error={!!error}
        helperText={!!error ? error.message : rest.helperText}
      />
    </FormControl>
  );
}

export default CustomInput;
