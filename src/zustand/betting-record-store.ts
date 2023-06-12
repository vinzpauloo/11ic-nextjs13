// ** Zustand
import { create } from 'zustand';

// ** MUI Imports
import { SelectChangeEvent } from '@mui/material';

// ** Types
interface BettingRecordProps {
    // Defined state properties
    days: string;
    tabSelected: string
    pageSize: number
    casinoPage: number
    sportsPage: number
    lotteryPage: number
    cardsPage: number
    vegasPage: number
    allPage: number

    // Defined actions
    setDays: (days: string) => void;
    setTabSelected: (tabSelected: string) => void;
    setPageSize: (pageSize: number) => void;
    setCasinoPage: (casinoPage: number) => void;
    setSportsPage: (sportsPage: number) => void;
    setLotteryPage: (lotteryPage: number) => void;
    setCardsPage: (cardsPage: number) => void;
    setVegasPage: (vegasPage: number) => void;
    setAllPage: (allPage: number) => void;

    // Functions
    handleChange: (event: SelectChangeEvent<unknown>) => void;
    handleSelectTab: (tab: string) => void;
    handlePageChange: (event: any, page: number) => void;
}

// =================================================================
export const useBettingRecordStore = create<BettingRecordProps>((set) => ({
    // Define initial state
    days: "3",
    tabSelected: "all",
    pageSize: 10,
    casinoPage: 0,
    sportsPage: 0,
    lotteryPage: 0,
    cardsPage: 0,
    vegasPage: 0,
    allPage: 0,

    // Define actions
    setDays: (days) => set({ days }),
    setTabSelected: (tabSelected: string) => set({ tabSelected }),
    setPageSize: (pageSize: number) => set({ pageSize }),
    setCasinoPage: (casinoPage: number) => set({ casinoPage }),
    setSportsPage: (sportsPage: number) => set({ sportsPage }),
    setLotteryPage: (lotteryPage: number) => set({ lotteryPage }),
    setCardsPage: (cardsPage: number) => set({ cardsPage }),
    setVegasPage: (vegasPage: number) => set({ vegasPage }),
    setAllPage: (allPage: number) => set({ allPage }),

    // Functions
    handleChange: (event: SelectChangeEvent<unknown>) => {
        set({ days: event.target.value as string });
    },
    handleSelectTab: (tab: string) => {
        set({ tabSelected: tab });
    },
    handlePageChange: (_, value) => {
        set((state) => {
            if (state.tabSelected === 'casino') {
                return { casinoPage: value };
            } else if (state.tabSelected === 'sports') {
                return { sportsPage: value };
            } else if (state.tabSelected === 'lottery') {
                return { lotteryPage: value };
            } else if (state.tabSelected === 'cards') {
                return { cardsPage: value }
            } else if (state.tabSelected === 'vegas') {
                return { vegasPage: value }
            } else if (state.tabSelected === "all") {
                return { allPage: value };
            }
            return {};
        });
    }
}))