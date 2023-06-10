// ** Zustand
import { create } from 'zustand';

interface ProfileProps {
    // Defined state properties
    activeButton: string;
    profileHeader: string;

    // Defined actions
    setActiveButton: (activeButton: string) => void;
    setProfileHeader: (profileHeader: string) => void;

    // Functions
    handleBoxClick: (buttonId: string) => void;
}

export const useProfileStore = create<ProfileProps>((set) => ({
    // Define initial state
    activeButton: '',
    profileHeader: '',

    // Define actions
    setActiveButton: (activeButton) => set({ activeButton }),
    setProfileHeader: (profileHeader) => set({ profileHeader }),

    // Functions
    handleBoxClick: (button: string) => {
        set({ activeButton: button });
    },
}))