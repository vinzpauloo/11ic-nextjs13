// ** React Imports
import { ComponentType, useEffect } from "react";

// ** Next Imports
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// ** MUI Imports
import { Backdrop, CircularProgress, Stack, Typography } from "@mui/material";

export default function ProtectedRoute(Component: ComponentType) {
  const ProtectedComponent = () => {
    const session = useSession();
    const router = useRouter();

    useEffect(() => {
      if (session?.status === "authenticated") {
        // If session exists and the user is authenticated, do nothing
      } else if (session?.status === "unauthenticated") {
        router.push("/");
      }
    }, [session?.status, router]);

    if (session?.status === "loading") {
      return (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <Stack alignItems="center" justifyContent="center" gap={2}>
            <CircularProgress color="inherit" />
            <Typography fontFamily="Roboto" color="#FFF">
              Checking your authentication...
            </Typography>
          </Stack>
        </Backdrop>
      );
    } else if (session?.status === "authenticated") {
      return <Component />;
    } else {
      return null;
    }
  };

  ProtectedComponent.displayName = `ProtectedRoute(${
    Component.displayName || Component.name || "Component"
  })`;

  return ProtectedComponent;
}
