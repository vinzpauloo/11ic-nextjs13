// ** Zustand
import { create } from 'zustand';

interface ProfileProps {
    // Defined state properties
    activeButton: string;

    // Defined actions
    setActiveButton: (activeButton: string) => void;

    // Functions
    handleBoxClick: (buttonId: string) => void;
}

export const useProfileStore = create<ProfileProps>((set) => ({
    // Define initial state
    activeButton: '',

    // Define actions
    setActiveButton: (activeButton) => set({ activeButton }),

    // Functions
    handleBoxClick: (button: string) => {
        set({ activeButton: button });
    },
}))