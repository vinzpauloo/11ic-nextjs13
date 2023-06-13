// ** React Imports
import { ComponentType, useEffect } from "react";

// ** MUI Imports
import { Backdrop, CircularProgress, Stack, Typography } from "@mui/material";

// ** Next Imports
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// export default function ProtectedRoute(Component: ComponentType) {
//   const ProtectedComponent = () => {
//     const session = useSession();
//     const router = useRouter();

//     console.log(`SESSION pRoute`, session);

//     useEffect(() => {
//       if (session?.status === "unauthenticated") {
//         router.push("/");
//       }
//     }, [session?.status, router]);

//     return <Component />;
//   };

//   ProtectedComponent.displayName = `ProtectedRoute(${
//     Component.displayName || Component.name || "Component"
//   })`;

//   return ProtectedComponent;
// }

// ** Temporary for now, testing if adding a Loading is better....
export default function ProtectedRoute(Component: ComponentType) {
  const ProtectedComponent = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
      if (status === "authenticated") {
        // If session exists and the user is authenticated, do nothing
      } else if (status === "unauthenticated") {
        // If session exists and user is unauthenticated, redirect to "/"
        router.push("/");
      }
    }, [status, router]);

    if (status === "loading") {
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
    } else if (status === "authenticated") {
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
