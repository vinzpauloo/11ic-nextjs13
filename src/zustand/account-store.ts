import { create } from 'zustand';

interface AccountProps {
    buttonClicked: string | "";

    setButtonClicked: (buttonClicked: string | "") => void;
}

export const useAccountStore = create<AccountProps>((set) => ({

    buttonClicked: "",


    setButtonClicked: (buttonClicked) => set({ buttonClicked })
}))