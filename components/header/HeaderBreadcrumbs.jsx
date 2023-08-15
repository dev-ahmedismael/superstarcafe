"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const HeaderBreadcrumbs = () => {
  const pathname = usePathname();
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box bgcolor={"#120f0f"} sx={{ opacity: 0.9 }} p={3}>
        <Typography variant="h5" color={"primary"}>
          <Link href={"/"}>HOME</Link> {pathname.toUpperCase()}
        </Typography>
      </Box>
    </Box>
  );
};

export default HeaderBreadcrumbs;
