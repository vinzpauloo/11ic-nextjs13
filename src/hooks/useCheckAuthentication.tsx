// ** Next Authentication
import { signOut, useSession } from "next-auth/react";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";

// =================================================================
export const useCheckAuthentication = () => {
  // ** Session **
  const { data: session, status } = useSession();

  // ** Zustand Store **
  const { isLogoutModalOpen, setLogoutModalOpen } = useAccountStore();

  // ** Hooks **
  const isAuthenticated = status === "authenticated" && !!session;

  const handleLogout = () => {
    setLogoutModalOpen(true); // open the modal when handleLogout is called
  };

  const handleModalClose = (willSignOut?: string) => {
    if (willSignOut === "sign-out") {
      signOut({ callbackUrl: "/" }); // sign out when the modal is closed
    }

    setLogoutModalOpen(false);
  };

  return { isAuthenticated, handleLogout, handleModalClose };
};
