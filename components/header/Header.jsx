"use client";
import React from "react";
import Navbar from "../navbar/Navbar";
import { Box } from "@mui/material";
import HeaderCarousel from "./HeaderCarousel";
import { usePathname } from "next/navigation";
import HeaderBreadcrumbs from "./HeaderBreadcrumbs";

const Header = () => {
  const path = usePathname();
  return (
    <header>
      <Box position={"absolute"} zIndex={10} width={"100%"}>
        <Navbar />
      </Box>
      {path === "/" ? <HeaderCarousel /> : <HeaderBreadcrumbs />}
    </header>
  );
};

export default Header;
