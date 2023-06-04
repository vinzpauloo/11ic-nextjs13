import { create } from 'zustand';

interface AccountProps {
    // Defined state properties
    headerBg: string;
    open: boolean;
    buttonClicked: string | "";

    // Defined actions
    setHeaderBg: (headerBg: string) => void;
    setOpen: (open: boolean) => void;
    setButtonClicked: (buttonClicked: string | "") => void;

    // Functions
    handleOpen: (button: string) => void;
}

export const useAccountStore = create<AccountProps>((set) => ({
    // Define initial state
    headerBg: 'rgba(33,31,27,0.8)',
    open: false,
    buttonClicked: "",

    // Define actions
    setHeaderBg: (headerBg) => set({ headerBg }),
    setOpen: (open) => set({ open }),
    setButtonClicked: (buttonClicked) => set({ buttonClicked }),

    // Functions
    handleOpen: (button: string) => {
        set({ open: true, buttonClicked: button });
    }
}))