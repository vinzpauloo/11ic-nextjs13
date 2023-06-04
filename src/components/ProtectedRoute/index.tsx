// ** React Imports
import { ComponentType, useEffect } from "react";

// ** Next Imports
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ProtectedRoute(Component: ComponentType) {
  const ProtectedComponent = () => {
    const session = useSession();
    const router = useRouter();

    console.log(`SESSION pRoute`, session);

    useEffect(() => {
      if (session?.status === "unauthenticated") {
        router.push("/");
      }
    }, [session?.status, router]);

    return <Component />;
  };

  ProtectedComponent.displayName = `ProtectedRoute(${
    Component.displayName || Component.name || "Component"
  })`;

  return ProtectedComponent;
}
