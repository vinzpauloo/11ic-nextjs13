// ** React Imports
import React, { useImperativeHandle, forwardRef } from "react";

// ** MUI Imports
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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
import Registration from "@/components/Account/Registration";
import IconifyIcon from "@/shared-components/Icon";
import Login from "@/components/Account/Login";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";
import Title from "./components/Title";

// ** Types
interface ModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  [key: string]: any;
  username: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  invitation_code?: string;
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
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Password confirmation is required"),
  mobile: yup
    .string()
    .matches(
      /^(1|44|\+1|\+44)\d{9}$/,
      "Invalid Mobile Number, format should be (1/+1/44/+44)"
    )
    .required("Mobile number is required"),
});

const LoginSignUpModal = ({ open, onClose }: ModalProps, ref: any) => {
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

  useImperativeHandle(ref, () => ({
    clearForm: () => {
      clearErrors();
      reset();
    },
  }));

  // ** Zustand Store **
  const { buttonClicked } = useAccountStore();

  // ** MUI Theme **
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      fullScreen={fullScreen}
    >
      <DialogContent sx={styles.container}>
        <Box sx={styles.imageWrapper}>
          <Box component="img" src="/images/modal/IPL.png" sx={styles.image} />
        </Box>
        <Box sx={styles.formWrapper}>
          <IconButton size="small" onClick={onClose} sx={styles.closeIcon}>
            <IconifyIcon icon="mdi:close" fontSize={20} />
          </IconButton>

          {buttonClicked === "login" ? (
            <>
              <Title title="Sign In" />
              <Login />
            </>
          ) : buttonClicked === "register" ? (
            <>
              <Title title="Sign Up" />
              <Registration
                handleSubmit={handleSubmit}
                handleFormSubmit={handleFormSubmit}
                control={control}
                errors={errors}
                formState={formState}
              />
            </>
          ) : (
            false
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const styles = {
  container: {
    background: "linear-gradient(118.89deg, #474747 0%, #323631 100%);",
    position: "relative",
    height: "636px",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    width: "100%",
  },
  imageWrapper: {
    display: { xs: "none", sm: "block" },
    flex: 1,
    width: "100%",
    height: { xs: "50%", sm: "100%" },
    top: 0,
    left: 0,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "cover",
    objectPosition: "50% 47%",
    width: { xs: "100%", sm: "50%" },
    height: { xs: "50%", sm: "100%" },
  },
  formWrapper: {
    flex: 1,
    width: "100%",
    position: "relative",
    pl: { xs: 0, sm: 4 },
    pt: { xs: 2, sm: 0 },
    height: { xs: "50%", sm: "100%" },
  },
  closeIcon: {
    color: "rgba(255, 255, 255, 0.6)",
    float: "right",
    mb: 2,
  },
};

export default forwardRef(LoginSignUpModal);
