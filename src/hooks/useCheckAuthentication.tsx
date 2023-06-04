// ** Next Authentication
import { signOut, useSession } from "next-auth/react";

export const useCheckAuthentication = () => {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated" && !!session;

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return { isAuthenticated, handleLogout };
};
