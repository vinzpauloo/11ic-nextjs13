// ** Next Authentication
import { signOut, useSession } from "next-auth/react";

// ** Zustand Store Imports
import { useAccountStore } from "@/zustand/account-store";
import { decrypt } from "@/utils/encryption";

// =================================================================
export const useCheckAuthentication = () => {
  // ** Session **
  const session = useSession();

  // ** Zustand Store **
  const { setLogoutModalOpen } = useAccountStore();

  // ** Hooks **
  const isAuthenticated = session?.status === "authenticated" && !!session;

  const handleLogout = () => {
    setLogoutModalOpen(true); // open the modal when handleLogout is called
  };

  const handleModalClose = (willSignOut?: string) => {
    if (willSignOut === "sign-out") {
      signOut({ callbackUrl: "/" }); // sign out when the modal is closed
    }

    setLogoutModalOpen(false);
  };

  const bearerToken =
    session?.data?.acdivo.advP && decrypt(session?.data?.acdivo.advP);

  return { isAuthenticated, handleLogout, handleModalClose, bearerToken };
};
