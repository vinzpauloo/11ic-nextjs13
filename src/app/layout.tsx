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

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}`),
  title: "11iC.COM--the first cryptocurrency casino based on Web3.0",
  description: "11iC.COM--the first cryptocurrency casino based on Web3.0",
  openGraph: {
    type: "website",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    title: "11iC.COM--the first cryptocurrency casino based on Web3.0",
    description: "11iC.COM--the first cryptocurrency casino based on Web3.0",
    siteName: "11iC",
    images: ["/images/seo/opengraph.png"],
  },
  twitter: {
    images: "/images/seo/twitter.png",
  },
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
