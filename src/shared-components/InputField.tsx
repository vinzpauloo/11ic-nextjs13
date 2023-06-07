// ** React Imports
import React, { ChangeEvent, KeyboardEventHandler } from "react";

// ** MUI Imports
import {
  Box,
  Button,
  Input,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  SvgIconTypeMap,
  TextField,
} from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

// ** Third Party Imports
import { Controller, Control, useController } from "react-hook-form";

interface ContainerProps {
  width?: string | number;
  marginTop?: string | number;
}

interface ControllerProps {
  controllerName: string;
  control: Control<any>;
}

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  variant?: "standard" | "filled" | "outlined";
  fullWidth?: boolean;
  error?: boolean;
  helperText?: string | undefined;
  name: string;
  type?: string | undefined;
  onKeyPress?: KeyboardEventHandler<HTMLDivElement> | undefined;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  muiIcon?: React.ReactNode;
  isMobile?: boolean;
  isVerification?: boolean;
}

type InputFieldProps = ControllerProps & ContainerProps & TextFieldProps;

const InputField = ({
  width,
  marginTop,
  controllerName,
  control,
  label,
  placeholder,
  variant,
  fullWidth,
  error,
  helperText,
  name,
  type,
  onKeyPress,
  multiline,
  rows,
  disabled,
  muiIcon,
  isMobile,
  isVerification,
}: InputFieldProps) => {
  const { field } = useController({ name, control });
  const [phone, setPhone] = React.useState(field.value || "");
  const [countryCode, setCountryCode] = React.useState("+1");

  const [displayPhone, setDisplayPhone] = React.useState("");

  const handleCountryCodeChange = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const newCountryCode = event.target.value as string;
    setCountryCode(newCountryCode);
    field.onChange(newCountryCode + phone);
    setDisplayPhone(phone);
  };

  const handlePhoneChange = (event: ChangeEvent<{ value: unknown }>) => {
    const newPhone = event.target.value as string;
    setPhone(newPhone);
    setDisplayPhone(newPhone);
    field.onChange(countryCode + newPhone);
  };

  return (
    <Box width={width} mt={marginTop}>
      <Controller
        name={controllerName}
        control={control}
        render={({ field }) =>
          isMobile ? (
            <TextField
              label={label}
              placeholder={placeholder}
              variant={variant}
              fullWidth={fullWidth}
              error={error}
              helperText={helperText}
              defaultValue={displayPhone}
              onChange={handlePhoneChange}
              name={name}
              type={type}
              onKeyPress={onKeyPress}
              multiline={multiline}
              rows={rows}
              disabled={disabled}
              sx={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(25px)",
              }}
              InputProps={{
                inputProps: {
                  style: {
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: 400,
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneIphoneIcon
                      fontSize="large"
                      sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                    />
                    <Select
                      value={countryCode}
                      onChange={handleCountryCodeChange}
                      input={<Input disableUnderline />}
                      sx={{ color: "rgba(255, 255, 255, 0.6)" }}
                    >
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                      {/* Add as many country codes as you need */}
                    </Select>
                  </InputAdornment>
                ),
                endAdornment: isVerification && (
                  <InputAdornment position="end">
                    <Button
                      variant="text"
                      sx={{
                        color: "#F3B867",
                        fontSize: { xs: 8, sm: 10, md: 14 },
                      }}
                      onClick={() => {
                        // TODO: Add function here
                      }}
                    >
                      Get Verification Code
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          ) : (
            <TextField
              label={label}
              placeholder={placeholder}
              variant={variant}
              fullWidth={fullWidth}
              error={error}
              helperText={helperText}
              defaultValue={field.value}
              onChange={field.onChange}
              name={name}
              type={type}
              onKeyPress={onKeyPress}
              multiline={multiline}
              rows={rows}
              disabled={disabled}
              sx={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(25px)",
              }}
              InputProps={{
                inputProps: {
                  style: {
                    color: "rgba(255, 255, 255, 0.6)",
                    fontWeight: 400,
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">{muiIcon}</InputAdornment>
                ),
                endAdornment: isVerification && (
                  <InputAdornment position="end">
                    <Button
                      variant="text"
                      sx={{
                        color: "#F3B867",
                        fontSize: { xs: 8, sm: 10, md: 14 },
                      }}
                      onClick={() => {
                        // TODO: Add function here
                      }}
                    >
                      Get Verification Code
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          )
        }
      />
    </Box>
  );
};

export default InputField;
