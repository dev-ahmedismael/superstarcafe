"use client";
import { Box, Button, Container } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const NavMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const pages = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Services", url: "/services" },
    { id: 4, title: "Blog", url: "/blog" },
    { id: 5, title: "About", url: "/about" },
    { id: 6, title: "Shop", url: "/shop" },
    { id: 7, title: "Contact", url: "/contact" },
  ];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      height={"100%"}
      onClick={() => setIsMenuActive(!isMenuActive)}
    >
      <Button>
        <MenuIcon sx={{ color: "white" }} />
      </Button>
      {isMenuActive && (
        <Box
          position={"absolute"}
          zIndex={10}
          top={90}
          left={0}
          width={"100%"}
          bgcolor={"#120f0f"}
          py={7}
        >
          {pages.map((page) => (
            <Box key={page.id} mb={2}>
              <Container>
                <Link href={page.url}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{ width: "100%" }}
                  >
                    {page.title}
                  </Button>
                </Link>
              </Container>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NavMenu;
