"use client";
// ** React Imports
import React from 'react'

// ** Custom imports
import Dashboard from './components/Dashboard';
import ProtectedRoute from "@/components/ProtectedRoute";

type Props = {}

const Withdrawal = (props: Props) => {
  return <Dashboard />
}

export default ProtectedRoute(Withdrawal);