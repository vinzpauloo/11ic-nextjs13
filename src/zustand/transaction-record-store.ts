// ** Zustand
import { create } from 'zustand';

// ** MUI Imports
import { SelectChangeEvent } from '@mui/material';

// ** Types
interface TransactionRecordProps {
    // Defined state properties
    days: string;
    tabSelected: string
    pageSize: number
    depositPage: number
    withdrawPage: number
    promoPage: number

    // Defined actions
    setDays: (days: string) => void;
    setTabSelected: (tabSelected: string) => void;
    setPageSize: (pageSize: number) => void;
    setDepositPage: (depositPage: number) => void;
    setWithdrawPage: (withdrawPage: number) => void;
    setPromoPage: (promoPage: number) => void;

    // Functions
    handleChange: (event: SelectChangeEvent<unknown>) => void;
    handleSelectTab: (tab: string) => void;
    handlePageChange: (event: any, page: number) => void;
}

// =================================================================
export const useTransactionRecordStore = create<TransactionRecordProps>((set) => ({
    // Define initial state
    days: "3",
    tabSelected: "deposit",
    pageSize: 10,
    depositPage: 0,
    withdrawPage: 0,
    promoPage: 0,

    // Define actions
    setDays: (days) => set({ days }),
    setTabSelected: (tabSelected: string) => set({ tabSelected }),
    setPageSize: (pageSize: number) => set({ pageSize }),
    setDepositPage: (depositPage: number) => set({ depositPage }),
    setWithdrawPage: (withdrawPage: number) => set({ withdrawPage }),
    setPromoPage: (promoPage: number) => set({ promoPage }),

    // Functions
    handleChange: (event: SelectChangeEvent<unknown>) => {
        set({ days: event.target.value as string });
    },
    handleSelectTab: (tab: string) => {
        set({ tabSelected: tab });
    },
    handlePageChange: (_, value) => {
        set((state) => {
            if (state.tabSelected === 'deposit') {
                return { depositPage: value };
            } else if (state.tabSelected === 'withdraw') {
                return { withdrawPage: value };
            } else if (state.tabSelected === 'promo') {
                return { promoPage: value };
            }
            return {};
        });
    }
}))