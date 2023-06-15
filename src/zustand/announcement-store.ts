// ** Zustand
import { create } from 'zustand';

// ** MUI Imports
import { SelectChangeEvent } from '@mui/material';

import MockAnnouncementData from '@/data/AnnouncementData';

// ** Types
interface AnnouncementData {
    id: string;
    title: string;
    created_at: string;
    description: string;
    link: string;
    icon: string;
    image: string;
    type: string;
    isRead?: boolean;
}

interface AnnouncementProps {
    // Defined state properties
    page: number
    value: string
    announcementStateData: AnnouncementData[]
    hideInitialDesc: Record<string, boolean>

    // Getter
    markAsRead: (announcementId: string) => void;
    markAllAsRead: () => void;

    // Defined actions
    setPage: (page: number) => void
    setValue: (value: string) => void
    setHideInitialDesc: (id: string) => void

    // Functions
    handleChangeSelect: (event: SelectChangeEvent<unknown>) => void
    handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

// =================================================================
export const useAnnouncementStore = create<AnnouncementProps>((set, get) => ({
    // Define initial state
    page: 1,
    value: "All",
    announcementStateData: MockAnnouncementData().announcementData,
    hideInitialDesc: (() => {
        const initialState: Record<string, boolean> = {};
        MockAnnouncementData().announcementData.forEach(item => {
            initialState[item.id] = true;
        });
        return initialState;
    })(),

    // Getter
    markAsRead: (announcementId: string) => {
        const data = get().announcementStateData;
        const updatedData = data.map(announcement =>
            announcement.id === announcementId ? { ...announcement, isRead: true } : announcement
        );
        set({ announcementStateData: updatedData });
    },
    markAllAsRead: () => {
        const data = get().announcementStateData;
        const updatedData = data.map(announcement => ({ ...announcement, isRead: true }));
        set({ announcementStateData: updatedData });
    },

    // Define actions
    setPage: (page) => set({ page }),
    setValue: (value) => set({ value }),
    setHideInitialDesc: (id: string) => set(prevState => ({
        hideInitialDesc: {
            ...prevState.hideInitialDesc,
            [id]: !prevState.hideInitialDesc[id]
        }
    })),

    // Functions
    handleChangeSelect: (event: SelectChangeEvent<unknown>) => {
        set({ value: event.target.value as string });
    },
    handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => {
        set({ page: value })
    }
}))