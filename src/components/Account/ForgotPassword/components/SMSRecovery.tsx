// ** React Imports
import React from "react";

// ** MUI Imports
import { Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import SecurityIcon from "@mui/icons-material/Security";

// ** Third Party Imports
import {
  Control,
  FieldErrors,
  FormState,
  UseFormHandleSubmit,
} from "react-hook-form";

// ** Custom Component Imports
import InputField from "@/shared-components/InputField";

// ** Types
interface FormValues {
  [key: string]: any;
  username: string;
  new_password: string;
  password_confirmation: string;
  mobile: string;
  verification_code?: string;
}

interface SMSRecoveryProps {
  handleSubmit: UseFormHandleSubmit<FormValues, undefined>;
  handleFormSubmit: (data: FormValues) => Promise<void>;
  control: Control<FormValues, any>;
  errors: FieldErrors<FormValues>;
  formState: FormState<FormValues>;
}

// ========================================================================

const SMSRecovery = ({
  handleSubmit,
  handleFormSubmit,
  control,
  errors,
  formState,
}: SMSRecoveryProps) => {
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
        isVerification
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
};

export default SMSRecovery;
