// ** Next Imports
import dynamic from "next/dynamic";

// ** Custom Component Imports
const SubHeader = dynamic(() => import("@/components/SubHeader"), {
  ssr: false,
}); // setting the server side rendering to false since we are utilizing localStorage in the SubHeader component

// =================================================================
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "#171717",
      }}
    >
      <SubHeader />
      {children}
    </div>
  );
}
