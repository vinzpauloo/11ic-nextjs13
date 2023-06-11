// ** React Imports
import React from "react";

// ** MUI Imports
import { Box, Button, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
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
import IconifyIcon from "@/shared-components/Icon";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** Types
interface FormValues {
  [key: string]: any;
  player_id: string;
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

// ========================================================================

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
        controllerName="player_id"
        control={control}
        placeholder="Username"
        variant="outlined"
        fullWidth={true}
        error={!!errors.player_id}
        helperText={errors.player_id?.message}
        name="player_id"
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
          backgroundColor:
            !formState.isValid || formState.isSubmitting ? `grey` : `#F3B867`,
          ...styles.registerButton,
        }}
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Sign Up
      </Button>

      <Box sx={styles.bottomWrapper}>
        <Typography sx={styles.title}>Already have an account?</Typography>
        <Button
          sx={styles.loginButton}
          onClick={() => setButtonClicked("login")}
        >
          Log in
        </Button>
      </Box>
    </form>
  );
};

const styles = {
  registerButton: {
    width: "100%",

    color: "#000",
    mt: 10,
    "&:hover": {
      backgroundColor: "#F9B957",
    },
  },
  bottomWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 12,
  },
  loginButton: {
    textTransform: "capitalize",
    color: "#F3B867",
    fontWeight: 900,
    fontSize: 12,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
};

export default Registration;
