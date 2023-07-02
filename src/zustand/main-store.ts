// ** Zustand
import { create } from 'zustand';

interface MainProps {
    // Defined state properties
    activeButton: string;
    mainHeader: string;
    display: React.ReactNode;

    // Defined actions
    setActiveButton: (activeButton: string) => void;
    setMainHeader: (mainHeader: string) => void;
    setDisplay: (display: React.ReactNode) => void;

    // Functions
    handleBoxClick: (buttonId: string) => void;
}

export const useMainStore = create<MainProps>((set) => ({
    // Define initial state
    activeButton: '',
    mainHeader: '',
    display: null,

    // Define actions
    setActiveButton: (activeButton) => set({ activeButton }),
    setMainHeader: (mainHeader) => set({ mainHeader }),
    setDisplay: (display) => set({ display }),

    // Functions
    handleBoxClick: (button: string) => {
        set({ activeButton: button });
    },
}))