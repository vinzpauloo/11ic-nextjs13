"use client";
// ** React Imports
import React from "react";

// ** Custom Component Imports
import ProtectedRoute from "@/components/ProtectedRoute";

// =================================================================

const TransactionRecordContent = () => {
  return <div>TransactionRecordContent</div>;
};

export default ProtectedRoute(TransactionRecordContent);
