"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";
import { Container } from "@mui/material";
import Image from "next/image";
import NavCart from "./NavCart";
import NavMenu from "./NavMenu";

const Navbar = () => {
  const pages = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Menu", url: "/menu" },
    { id: 3, title: "Services", url: "/services" },
    { id: 4, title: "Blog", url: "/blog" },
    { id: 5, title: "About", url: "/about" },
    { id: 6, title: "Shop", url: "/shop" },
    { id: 7, title: "Contact", url: "/contact" },
  ];

  // Show navbar on scroll
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      setIsScrolledDown(true);
    } else {
      setIsScrolledDown(false);
    }
  });

  return (
    <nav className={isScrolledDown ? "fixed_nav" : ""}>
      <Container>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box display={{ xs: "flex", sm: "flex", md: "none" }}>
            <NavMenu />
          </Box>
          <Box>
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="Logo"
                width={80}
                height={60}
                priority
              />
            </Link>
          </Box>
          <Box
            display={{ xs: "none", sm: "none", md: "flex" }}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Box display={"flex"}>
              {pages.map((page) => (
                <Link key={page.id} href={page.url}>
                  <Button
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#c49b63")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "white")
                    }
                    color="inherit"
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
              <Box display={{ xs: "none", sm: "none", md: "block" }}>
                <NavCart />
              </Box>
            </Box>
          </Box>
          {/* Nav cart that appears in small screen only */}
          <Box display={{ xs: "block", sm: "block", md: "none" }}>
            <NavCart />
          </Box>
        </Box>
      </Container>
    </nav>
  );
};

export default Navbar;
