"use client";
import { Badge, Box, Button } from "@mui/material";
import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Link from "next/link";
import { useSelector } from "react-redux";

const NavCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Link href={"/cart"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        height={"100%"}
        ml={2}
      >
        <Badge badgeContent={cart.length.toString()} color="primary">
          <LocalMallIcon />
        </Badge>
      </Box>
    </Link>
  );
};

export default NavCart;
