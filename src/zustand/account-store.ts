import { create } from 'zustand';
import { AlertColor } from "@mui/material/Alert";

interface AccountProps {
    // Defined state properties
    headerBg: string;
    open: boolean;
    buttonClicked: string | "";
    remember: boolean;
    forgotPasswordTab: string;
    isLogoutModalOpen: boolean;
    fingerprintJsData: { [key: string]: any } | undefined
    openSnack: boolean
    snackMessage: string
    snackSeverity: AlertColor | undefined

    // Defined actions
    setHeaderBg: (headerBg: string) => void;
    setOpen: (open: boolean) => void;
    setButtonClicked: (buttonClicked: string | "") => void;
    setRemember: (remember: boolean) => void;
    setForgotPasswordTab: (forgotPasswordTab: string) => void;
    setLogoutModalOpen: (isLogoutModalOpen: boolean) => void;
    setFingerprintJsData: (fingerprintJsData: { [key: string]: any } | undefined) => void;
    setOpenSnack: (openSnack: boolean) => void;
    setSnackMessage: (snackMessage: string) => void;
    setSnackSeverity: (snackSeverity: AlertColor | undefined) => void;

    // Functions
    handleOpen: (button: string) => void;
}

export const useAccountStore = create<AccountProps>((set) => ({
    // Define initial state
    headerBg: 'rgba(33,31,27,0.8)',
    open: false,
    buttonClicked: "",
    remember: false,
    forgotPasswordTab: "1",
    isLogoutModalOpen: false,
    fingerprintJsData: {},
    openSnack: false,
    snackMessage: "",
    snackSeverity: "success",

    // Define actions
    setHeaderBg: (headerBg) => set({ headerBg }),
    setOpen: (open) => set({ open }),
    setButtonClicked: (buttonClicked) => set({ buttonClicked }),
    setRemember: (remember) => set({ remember }),
    setForgotPasswordTab: (forgotPasswordTab) => set({ forgotPasswordTab }),
    setLogoutModalOpen: (isLogoutModalOpen) => set({ isLogoutModalOpen }),
    setFingerprintJsData: (fingerprintJsData) => set({ fingerprintJsData }),
    setOpenSnack: (openSnack) => set({ openSnack }),
    setSnackMessage: (snackMessage) => set({ snackMessage }),
    setSnackSeverity: (snackSeverity) => set({ snackSeverity }),

    // Functions
    handleOpen: (button: string) => {
        set({ open: true, buttonClicked: button });
    }
}))