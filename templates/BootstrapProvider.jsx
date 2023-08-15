"use client";
import React from "react";
import { SSRProvider } from "react-bootstrap";

const BootstrapProvider = ({ children }) => {
  return <SSRProvider>{children}</SSRProvider>;
};

export default BootstrapProvider;
