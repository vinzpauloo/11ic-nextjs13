// "use client";
// ** React Imports
import React, { useImperativeHandle, forwardRef } from "react";

// ** Next Imports
import { signIn } from "next-auth/react";

// ** MUI Imports
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AlertColor } from "@mui/material/Alert";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";
import { useMutation } from "@tanstack/react-query";

// ** Custom Component Imports
import Registration from "@/components/Account/Registration";
import IconifyIcon from "@/shared-components/Icon";
import Login from "@/components/Account/Login";
import Title from "./components/Title";
import ForgotPassword from "./ForgotPassword";
import SnackbarAlert from "./components/SnackbarAlert";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** API Services Imports
import { CreateAccount } from "@/services/api/CreateAccount"; // Client side API, uncomment in Services
// import { postRegister } from "@/services/api/CreateAccount"; // Server side API

// ** Types
interface ModalProps {
  open: boolean;
  onClose: () => void;
}

interface FormValues {
  [key: string]: any;
  player_id: string;
  password: string;
  password_confirmation: string;
  mobile: string;
  invitation_code?: string;
  ipaddress?: string;
  fp?: string;
  device?: number;
}

const schema = yup.object().shape({
  player_id: yup
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

// ========================================================================

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

  // ** States **
  const [responseData, setResponseData] = React.useState<{ message: string }>();
  const [loginCredentials, setLoginCredentials] = React.useState<{}>({});

  // ** API Services **
  const { postRegister } = CreateAccount(); // Client side API, uncomment in Services
  const mutation = useMutation(postRegister, {
    onSuccess: (data) => {
      console.log(data);
      setResponseData(data);
    },
  });

  // ** Zustand Store **
  const {
    buttonClicked,
    setOpen,
    setSnackMessage,
    setSnackSeverity,
    setOpenSnack,
  } = useAccountStore();

  // ** Fingerprint JS **
  const { data: fpjsData } = useVisitorData(
    { extendedResult: true },
    { immediate: true }
  );

  // ** MUI Theme **
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // ** Functions **
  // ** Register Form Function **
  const handleFormSubmit = async (data: FormValues) => {
    // ** Data from Fingerprint JS **
    data.ipaddress = fpjsData?.ip ?? "No Ipaddress";
    data.fp = fpjsData?.visitorId ?? "No FP";
    data.device = fpjsData?.ipLocation?.accuracyRadius ?? 3;
    data.origin_url = fpjsData?.ipLocation?.city?.name ?? "No Origin";

    const form: any = {
      data: data,
    };

    try {
      await mutation.mutateAsync(form.data);
      setLoginCredentials(form.data);
    } catch (e: any) {
      console.log(`Error Register`, e);
    }
  };

  // ** Snackbar Function **
  const handleClick = React.useCallback(
    (message: string, severity: AlertColor) => {
      setSnackMessage(message);
      setSnackSeverity(severity);
      setOpenSnack(true);
    },
    [setSnackMessage, setSnackSeverity, setOpenSnack]
  );

  // ** Check for changes in responseData, currently backend always returns a SUCCESS so we handle errors in our end.
  React.useEffect(() => {
    if (responseData?.message) {
      if (responseData?.message === "SUCCESS") {
        handleClick("Registration Successful!", "success");
        setTimeout(() => {
          signIn("credentials", {
            ...loginCredentials,
          });
          setOpen(false);
          reset({
            player_id: "",
            password: "",
            password_confirmation: "",
            mobile: "",
            invitation_code: "",
          });
        }, 1000);
      } else {
        handleClick(`Registration Failed! ${responseData?.message}`, "error");
      }
    }
  }, [responseData, setOpen, reset, handleClick, loginCredentials]);

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
          ) : buttonClicked === "forgot-password" ? (
            <ForgotPassword />
          ) : (
            false
          )}
          <SnackbarAlert />
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
