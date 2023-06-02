// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  useForm,
  Controller,
  UseFormHandleSubmit,
  Control,
  FieldErrors,
  FormState,
} from "react-hook-form";

// ** Custom Component Imports
import InputField from "@/shared-components/InputField";
import IconifyIcon from "@/shared-components/Icon";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** Types
interface FormValues {
  [key: string]: any;
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup
    .string()
    .min(7, "Username must be at least 7 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = async (data: FormValues) => {
    console.log(`SUCCESS SUBMIT FORM`, data);
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }

    const form: any = {
      data: formData,
    };

    try {
    } catch (e: any) {}
  };

  const { setButtonClicked } = useAccountStore();

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <InputField
        marginTop=""
        width="100%"
        controllerName="username"
        control={control}
        placeholder="Username"
        variant="outlined"
        fullWidth={true}
        error={!!errors.username}
        helperText={errors.username?.message}
        name="username"
        muiIcon={
          <PersonIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          />
        }
      />

      <InputField
        marginTop={2}
        width="100%"
        controllerName="password"
        control={control}
        placeholder="Password"
        variant="outlined"
        fullWidth={true}
        error={!!errors.password}
        helperText={errors.password?.message}
        name="password"
        type="password"
        muiIcon={
          <LockIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          />
        }
      />

      <Button
        type="submit"
        sx={{
          width: "100%",
          backgroundColor:
            !formState.isValid || formState.isSubmitting ? `grey` : `#F3B867`,
          color: "#000",
          mt: 10,
          "&:hover": {
            backgroundColor: "#F9B957",
          },
        }}
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Sign In
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: 12 }}>
          Don&lsquo;t you have an account?
        </Typography>
        <Button
          sx={{
            textTransform: "capitalize",
            color: "#F3B867",
            fontWeight: 900,
            fontSize: 12,
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
          onClick={() => setButtonClicked("register")}
        >
          Sign Up
        </Button>
      </Box>
    </form>
  );
};

export default Login;
