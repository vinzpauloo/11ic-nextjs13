// ** Zustand
import { create } from 'zustand';

interface BaseProps {
    title: string
    image_link: string
    url_link: string
}

interface HomeProps {
    // Defined state properties
    banner: [];
    webNotices: [];
    liveCasino: [];
    rummy: BaseProps[];
    lottery: BaseProps[];
    supportPayment: BaseProps[];

    // Defined actions
    setBanner: (banner: []) => void;
    setWebNotices: (webNotice: []) => void;
    setLiveCasino: (liveCasino: []) => void;
    setRummy: (rummy: BaseProps[]) => void;
    setLottery: (lottery: BaseProps[]) => void;
    setSupportPayment: (supportPayment: BaseProps[]) => void;
    // Functions
}

export const useHomeStore = create<HomeProps>((set) => ({
    // Define initial state
    activeButton: '',
    profileHeader: '',
    display: null,
    banner: [],
    webNotices: [],
    liveCasino: [],
    rummy: [],
    lottery: [],
    supportPayment: [],

    // Define actions
    setBanner: (banner) => set({ banner }),
    setWebNotices: (webNotices) => set({ webNotices }),
    setLiveCasino: (liveCasino) => set({ liveCasino }),
    setRummy: (rummy) => set({ rummy }),
    setLottery: (lottery) => set({ lottery }),
    setSupportPayment: (supportPayment) => set({ supportPayment }),

    // Functions
}))