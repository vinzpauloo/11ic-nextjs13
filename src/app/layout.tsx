// ** Global Styles Imports
import "../styles/globals.css";

// ** Next Imports
import { Inter } from "next/font/google";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

// ** Provider Imports
import { MuiSetup } from "@/providers/MuiSetup";
import QueryProvider from "@/providers/QueryProvider";
import AuthContext from "@/providers/AuthContext";
import FingerprintJSProvider from "@/providers/FingerPrintJS";

// ** Third Party Imports
import "../configs/i18n";

// ** Custom Components Imports
import Header from "@/components/Header";
import FloatingActionButton from "@/components/FloatingAction";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "11iC.COM--the first cryptocurrency casino based on Web3.0",
  description: "11iC.com",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          // backgroundImage:
          //   "url('https://j9.io/assets/PC-Background-d2a73e39.png')",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundColor: "#171717",
        }}
      >
        <AuthContext>
          <FingerprintJSProvider>
            <QueryProvider>
              <MuiSetup>
                <Header />
                <FloatingActionButton />
                {children}
                <Footer />
              </MuiSetup>
            </QueryProvider>
          </FingerprintJSProvider>
        </AuthContext>
      </body>
    </html>
  );
}
