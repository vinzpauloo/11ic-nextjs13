// ** Zustand
import { create } from 'zustand';

// ** MUI Imports
import { SelectChangeEvent } from '@mui/material';

// ** Mock Data
import MockAnnouncementData from '@/data/AnnouncementData';

// ** Types
export interface MessageCenterData {
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

interface MessageCenterProps {
    // Defined state properties
    page: number
    value: string
    announcementStateData: MessageCenterData[]
    hideInitialDesc: Record<string, boolean>

    // Getter
    markAsRead: (announcementId: string) => void;
    markAllAsRead: () => void;
    deleteAnnouncement: (announcementId: string) => void;
    deleteAllAnnouncements: () => void;

    // Defined actions
    setPage: (page: number) => void
    setValue: (value: string) => void
    setHideInitialDesc: (id: string) => void

    // Functions
    handleChangeSelect: (event: SelectChangeEvent<unknown>) => void
    handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void
}

// =================================================================
export const useMessageCenterStore = create<MessageCenterProps>((set, get) => ({
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
    deleteAnnouncement: (announcementId: string) => {
        const data = get().announcementStateData;
        const updatedData = data.filter(announcement => announcement.id !== announcementId);
        set({ announcementStateData: updatedData });
    },
    deleteAllAnnouncements: () => {
        set({ announcementStateData: [] });
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