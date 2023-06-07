// ** React Imports
import React from "react";

// ** Next Imports
import { signIn, signOut, useSession } from "next-auth/react";
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
import CryptoJS from "crypto-js";

// ** Custom Component Imports
import InputField from "@/shared-components/InputField";

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
    clearErrors,
    formState,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  // ** Next Auth
  const session = useSession();

  // ** Store
  const { setButtonClicked } = useAccountStore();
  const [remember, setRemember] = React.useState(false);

  React.useEffect(() => {
    // Retrieve stored user data
    const storedData = localStorage.getItem("user");
    if (storedData) {
      const decryptedData = CryptoJS.AES.decrypt(
        storedData,
        "secret key"
      ).toString(CryptoJS.enc.Utf8);
      const parsedData = JSON.parse(decryptedData);
      reset(parsedData); // reset form with stored values
      setRemember(true);
    }
  }, [reset]);

  // ** Functions
  const handleFormSubmit = async (data: FormValues) => {
    console.log(`SUCCESS SUBMIT FORM`, data);

    data.ipaddress = "12.23.24.23";
    data.fp = "233";
    data.device = 4;

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
      localStorage.removeItem("user");
    }

    try {
      await signIn("credentials", { ...data });
    } catch (e: any) {
      console.log(`ERROR`, e);
    }
  };

  const handleLogout = () => {
    signOut({ callbackUrl: "https://www.google.com" });
  };

  console.log(`CHECK SESSION@@@@`, session);

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

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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

        <Button sx={styles.forgotPassButton}>
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
    </form>
  );
};

const styles = {
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
