import { create } from 'zustand';

interface AccountProps {
    // Defined state properties
    headerBg: string;
    open: boolean;
    buttonClicked: string | "";
    remember: boolean;
    forgotPasswordTab: string;
    isLogoutModalOpen: boolean;

    // Defined actions
    setHeaderBg: (headerBg: string) => void;
    setOpen: (open: boolean) => void;
    setButtonClicked: (buttonClicked: string | "") => void;
    setRemember: (remember: boolean) => void;
    setForgotPasswordTab: (forgotPasswordTab: string) => void;
    setLogoutModalOpen: (isLogoutModalOpen: boolean) => void;

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

    // Define actions
    setHeaderBg: (headerBg) => set({ headerBg }),
    setOpen: (open) => set({ open }),
    setButtonClicked: (buttonClicked) => set({ buttonClicked }),
    setRemember: (remember) => set({ remember }),
    setForgotPasswordTab: (forgotPasswordTab) => set({ forgotPasswordTab }),
    setLogoutModalOpen: (isLogoutModalOpen) => set({ isLogoutModalOpen }),

    // Functions
    handleOpen: (button: string) => {
        set({ open: true, buttonClicked: button });
    }
}))