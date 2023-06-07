// ** React Imports
import React from "react";

// ** MUI Imports
import { Box } from "@mui/material";

// ** Custom Component Imports
import ForgotPasswordTabs from "./components/Tabs";
import SMSRecovery from "./components/SMSRecovery";

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

// ** Zustand Imports
import { useAccountStore } from "@/zustand/account-store";
import EmailRecovery from "./components/EmailRecovery";

interface FormValues {
  [key: string]: any;
  username: string;
  new_password: string;
  password_confirmation: string;
  mobile: string;
  verification_code?: string;
}

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
  mobile: yup
    .string()
    .matches(
      /^(1|44|\+1|\+44)\d{9}$/,
      "Invalid Mobile Number, format should be (1/+1/44/+44)"
    )
    .required("Mobile number is required"),
});

// ========================================================================

const ForgotPassword = () => {
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
  // ** States **

  // ** Store **
  const { forgotPasswordTab } = useAccountStore();

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
    <Box>
      <ForgotPasswordTabs />

      {forgotPasswordTab === "1" ? (
        <SMSRecovery
          handleSubmit={handleSubmit}
          handleFormSubmit={handleFormSubmit}
          control={control}
          errors={errors}
          formState={formState}
        />
      ) : forgotPasswordTab === "2" ? (
        <EmailRecovery />
      ) : (
        false
      )}
    </Box>
  );
};

const styles = {};

export default ForgotPassword;
