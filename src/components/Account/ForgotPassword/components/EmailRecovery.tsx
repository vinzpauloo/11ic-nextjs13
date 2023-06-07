// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

// ** Custom Component Imports
import InputField from "@/shared-components/InputField";

// ** Types
interface FormValues {
  [key: string]: any;
  username: string;
  new_password: string;
  password_confirmation: string;
  email: string;
  verification_code?: string;
}

// ** Schema
const schema = yup.object().shape({
  username: yup
    .string()
    .min(7, "Username must be at least 7 characters")
    .required("Username is required"),
  new_password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("new_password"), undefined], "Passwords must match")
    .required("Password confirmation is required"),
});

// ========================================================================

const EmailRecovery = () => {
  // ** React Hook Form
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

  // ** Functions **
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

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      <InputField
        marginTop=""
        width="100%"
        controllerName="username"
        control={control}
        placeholder="Username or Phone Number"
        variant="outlined"
        fullWidth={true}
        error={!!errors.username}
        helperText={errors.username?.message}
        name="username"
      />

      <InputField
        marginTop={2}
        width="100%"
        controllerName="email"
        control={control}
        placeholder="Email Address"
        variant="outlined"
        fullWidth={true}
        error={!!errors.email}
        helperText={errors.email?.message}
        name="email"
        isVerification
        muiIcon={
          <EmailIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          />
        }
      />

      <InputField
        marginTop={2}
        width="100%"
        controllerName="verification_code"
        control={control}
        placeholder="Verification Code"
        variant="outlined"
        fullWidth={true}
        error={!!errors.verification_code}
        helperText={errors.verification_code?.message}
        name="verification_code"
        muiIcon={
          <SecurityIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          />
        }
      />

      <InputField
        marginTop={2}
        width="100%"
        controllerName="new_password"
        control={control}
        placeholder="New Password"
        variant="outlined"
        fullWidth={true}
        error={!!errors.new_password}
        helperText={errors.new_password?.message}
        name="new_password"
        type="password"
        muiIcon={
          <LockIcon
            fontSize="large"
            sx={{ color: "rgba(255, 255, 255, 0.6)" }}
          />
        }
      />

      <InputField
        marginTop={2}
        width="100%"
        controllerName="password_confirmation"
        control={control}
        placeholder="Confirm Password"
        variant="outlined"
        fullWidth={true}
        error={!!errors.password_confirmation}
        helperText={errors.password_confirmation?.message}
        name="password_confirmation"
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
          backgroundColor:
            !formState.isValid || formState.isSubmitting ? `grey` : `#F3B867`,
          ...styles.recoverButton,
        }}
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Recover
      </Button>

      <Typography sx={styles.spam}>
        Check spam folder for recovery code
      </Typography>
    </form>
  );
};

const styles = {
  recoverButton: {
    width: "100%",
    height: "50px",
    textTransform: "capitalize",
    color: "#000",
    mt: 2,
    "&:hover": {
      backgroundColor: "#F9B957",
    },
  },
  spam: {
    textAlign: "center",
    color: "#FFF",
    p: 2,
    fontSize: 12,
  },
};

export default EmailRecovery;
