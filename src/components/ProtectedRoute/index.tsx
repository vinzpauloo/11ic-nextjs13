// ** React Imports
import { ComponentType, useEffect } from "react";

// ** Next Imports
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// ** Custom Component Imports
import BackdropLoader from "@/shared-components/BackdropLoader";

// =================================================================
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
      return <BackdropLoader description="Checking authentication status..." />;
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
