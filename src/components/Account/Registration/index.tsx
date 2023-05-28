// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import IconifyIcon from "@/shared-components/Icon";
import LockIcon from "@mui/icons-material/Lock";

// ** Third Party Imports
import {
  Control,
  FieldErrors,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
} from "react-hook-form";

// ** Custom Component Imports
import InputField from "@/shared-components/InputField";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** Types
interface FormValues {
  [key: string]: any;
  username: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  invitation_code?: string;
}

interface RegisterProps {
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  handleFormSubmit: (data: FormValues) => Promise<void>;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
  formState: FormState<FormValues>;
}

const Registration = ({
  handleSubmit,
  handleFormSubmit,
  control,
  errors,
  formState,
}: RegisterProps) => {
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

      <InputField
        marginTop={2}
        width="100%"
        controllerName="mobile"
        control={control}
        placeholder="Phone No."
        variant="outlined"
        fullWidth={true}
        error={!!errors.mobile}
        helperText={errors.mobile?.message}
        name="mobile"
        onKeyPress={(e) => {
          // Allow only numbers and the '+' symbol
          if (!/[0-9+]/.test(e.key)) {
            e.preventDefault();
          }
        }}
        isMobile={true}
      />

      <InputField
        marginTop={2}
        width="100%"
        controllerName="invitation_code"
        control={control}
        placeholder="Invitation Code (optional)"
        variant="outlined"
        fullWidth={true}
        error={!!errors.invitation_code}
        helperText={errors.invitation_code?.message}
        name="invitation_code"
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
        Sign Up
      </Button>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ color: "#FFF", fontSize: 12 }}>
          Already have an account?
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
          onClick={() => setButtonClicked("login")}
        >
          Log in
        </Button>
      </Box>
    </form>
  );
};

export default Registration;
