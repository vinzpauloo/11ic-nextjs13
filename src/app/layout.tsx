// ** Global Styles Imports
import "../styles/globals.css";

// ** Next Imports
import { Inter, Roboto } from "next/font/google";
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
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
        className={roboto.className}
        style={{
          backgroundColor: "#171717",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <AuthContext>
          {/* <FingerprintJSProvider> */}
          <QueryProvider>
            <MuiSetup>
              <Header />
              <FloatingActionButton />
              <div style={{ flex: "1 0 auto" }}>{children}</div>
              <Footer />
            </MuiSetup>
          </QueryProvider>
          {/* </FingerprintJSProvider> */}
        </AuthContext>
      </body>
    </html>
  );
}
