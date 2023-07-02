// ** Zustand
import { create } from 'zustand';

interface InformationProps {
    // Defined state properties
    activeButton: string;
    profileHeader: string;
    display: React.ReactNode;
    tabSelected: string
    selected: number

    // Defined actions
    setActiveButton: (activeButton: string) => void;
    setProfileHeader: (profileHeader: string) => void;
    setDisplay: (display: React.ReactNode) => void;
    setTabSelected: (tabSelected: string) => void;
    setSelected: (selected: number) => void;

    // Functions
    handleBoxClick: (buttonId: string) => void;
    handleSelectTab: (tab: string) => void;
}

export const useInformationStore = create<InformationProps>((set) => ({
    // Define initial state
    activeButton: '',
    profileHeader: '',
    display: null,
    tabSelected: "about",
    selected: -1,

    // Define actions
    setActiveButton: (activeButton) => set({ activeButton }),
    setProfileHeader: (profileHeader) => set({ profileHeader }),
    setDisplay: (display) => set({ display }),
    setTabSelected: (tabSelected: string) => set({ tabSelected }),
    setSelected: (selected) => set({ selected }),

    // Functions
    handleBoxClick: (button: string) => {
        set({ activeButton: button });
    },
    handleSelectTab: (tab: string) => {
        set({ tabSelected: tab });
    },
}))