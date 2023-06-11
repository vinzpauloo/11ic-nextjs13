"use client";

// ** React Imports
import React from "react";

// ** Third Part Imports
import { FpjsProvider } from "@fingerprintjs/fingerprintjs-pro-react";

// =================================================================
export default function FingerprintJSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const apiKey = process.env.NEXT_PUBLIC_FPJS || "";

  return (
    <FpjsProvider loadOptions={{ apiKey: apiKey }}>{children}</FpjsProvider>
  );
}
