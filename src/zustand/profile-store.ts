// ** Zustand
import { create } from 'zustand';

interface ProfileProps {
    // Defined state properties
    activeButton: string;
    profileHeader: string;
    display: React.ReactNode;

    // Defined actions
    setActiveButton: (activeButton: string) => void;
    setProfileHeader: (profileHeader: string) => void;
    setDisplay: (display: React.ReactNode) => void;

    // Functions
    handleBoxClick: (buttonId: string) => void;
}

export const useProfileStore = create<ProfileProps>((set) => ({
    // Define initial state
    activeButton: '',
    profileHeader: '',
    display: null,

    // Define actions
    setActiveButton: (activeButton) => set({ activeButton }),
    setProfileHeader: (profileHeader) => set({ profileHeader }),
    setDisplay: (display) => set({ display }),

    // Functions
    handleBoxClick: (button: string) => {
        set({ activeButton: button });
    },
}))