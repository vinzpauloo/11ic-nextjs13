// ** React Imports
import React from "react";

// ** Next Imports
import { SignInResponse, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

// ** MUI Imports
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { AlertColor } from "@mui/material/Alert";

// ** Third Party Imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import CryptoJS from "crypto-js";
import { useVisitorData } from "@fingerprintjs/fingerprintjs-pro-react";

// ** Custom Component Imports
import InputField from "@/shared-components/InputField";
import SnackbarAlert from "../components/SnackbarAlert";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// ** Types
interface FormValues {
  [key: string]: any;
  player_id: string;
  password: string;
}

const schema = yup.object().shape({
  player_id: yup
    .string()
    .min(4, "Username must be at least 4 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

// ========================================================================

const Login = () => {
  // ** React Hook Form
  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  // ** Store
  const {
    remember,
    setRemember,
    setButtonClicked,
    setOpen,
    setSnackMessage,
    setSnackSeverity,
    setOpenSnack,
    setAnnouncementModalOpen,
  } = useAccountStore();

  // ** Password Remember Me & Encryption
  React.useEffect(() => {
    // Retrieve stored user data
    const storedData = localStorage.getItem("Ci11");
    if (storedData) {
      const decryptedData = CryptoJS.AES.decrypt(
        storedData,
        "secret key"
      ).toString(CryptoJS.enc.Utf8);
      const parsedData = JSON.parse(decryptedData);
      reset(parsedData); // reset form with stored values
      setRemember(true);
    }
  }, [reset, setRemember]);

  // ** Fingerprint JS
  const {
    isLoading,
    error,
    data: fpjsData,
    getData: getFpjsData,
  } = useVisitorData({ extendedResult: true }, { immediate: true });

  // ** Functions
  const handleFormSubmit = async (data: FormValues) => {
    // ** Data from Fingerprint JS **
    data.ipaddress = fpjsData ? fpjsData.ip : "No Ipaddress";
    data.fp = fpjsData ? fpjsData.visitorId : "No FP";
    data.device = fpjsData ? fpjsData.device : "No device";

    // ** If remember me is checked, save user credentials to localStorage **
    if (remember) {
      // Encrypt and save user credentials to localStorage
      const userData = {
        player_id: data.player_id,
        password: data.password,
      };
      const encryptedData = CryptoJS.AES.encrypt(
        JSON.stringify(userData),
        "secret key"
      ).toString();
      localStorage.setItem("Ci11", encryptedData);
    } else {
      // Remove user data from localStorage
      localStorage.removeItem("Ci11");
    }

    try {
      const response: SignInResponse | undefined = await signIn("credentials", {
        ...data,
        callbackUrl: "/",
        redirect: false,
      });
      if (response?.error === "CredentialsSignin") {
        handleClick(`Login Failed! Invalid Credentials`, "error");
      } else {
        handleClick(`Login Successful!`, "success");
        setTimeout(() => {
          setOpen(false);
          setAnnouncementModalOpen(true);
        }, 500);
      }
    } catch (e: any) {
      console.log(`ERROR`, e);
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

      <Box sx={styles.forgotPassWrapper}>
        <FormControlLabel
          control={
            <Checkbox
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              size="small"
            />
          }
          label={
            <Typography sx={styles.titleText}>Remember password</Typography>
          }
        />

        <Button
          sx={styles.forgotPassButton}
          onClick={() => setButtonClicked("forgot-password")}
        >
          <Typography sx={styles.titleText}>Forgot Password?</Typography>
        </Button>
      </Box>

      <Button
        type="submit"
        sx={{
          ...styles.signInButton,
          backgroundColor:
            !formState.isValid || formState.isSubmitting ? `grey` : `#F3B867`,
        }}
        disabled={!formState.isValid || formState.isSubmitting}
      >
        Sign In
      </Button>

      <Box sx={styles.bottomWrapper}>
        <Typography sx={styles.titleText}>
          Don&lsquo;t you have an account?
        </Typography>
        <Button
          sx={styles.signUpButton}
          onClick={() => setButtonClicked("register")}
        >
          Sign Up
        </Button>
      </Box>
      <SnackbarAlert />
    </form>
  );
};

const styles = {
  forgotPassWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgotPassButton: {
    cursor: "pointer",
  },
  titleText: {
    fontSize: 11,
    color: "rgba(255, 255, 255, 0.6)",
    textTransform: "capitalize",
  },
  signInButton: {
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
  signUpButton: {
    textTransform: "capitalize",
    color: "#F3B867",
    fontWeight: 900,
    fontSize: 12,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
};

export default Login;
