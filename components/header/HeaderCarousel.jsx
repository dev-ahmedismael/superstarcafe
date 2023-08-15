"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Box, Button, Typography } from "@mui/material";
import { greatVibes } from "@/app/layout";
import Link from "next/link";

const HeaderCarousel = () => {
  const images = [
    {
      id: 1,
      imageUrl: "/images/header/bg_1.jpg",
      caption: "THE BEST COFFEE TASTING EXPERIENCE IN LIBERTY CITY",
    },
    {
      id: 2,
      imageUrl: "/images/header/bg_2.jpg",
      caption: "AMAZING TASTE AND BEAUTIFUL PLACES",
    },
    {
      id: 3,
      imageUrl: "/images/header/bg_3.jpg",
      caption: "CREAMY HOT AND READY TO SERVE",
    },
  ];
  return (
    <Carousel fade controls={false}>
      {images.map((image) => (
        <Carousel.Item key={image.id} style={{ height: "100vh" }}>
          <Box className="img-wrapper" width={"100%"} height={"100%"}>
            <img
              src={image.imageUrl}
              alt="Header Image"
              width={"100%"}
              height={"100%"}
            />
          </Box>

          <Carousel.Caption>
            <Box display={{ xs: "none", sm: "none", md: "block" }}>
              <Typography
                variant="h4"
                className={greatVibes.className}
                color={"primary"}
                mb={2}
              >
                Welcome
              </Typography>
              <Typography variant="h3" mb={2}>
                {image.caption}
              </Typography>
              <Typography variant="h6" mb={2}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </Typography>
              <Box display={"flex"} justifyContent={"center"}>
                <Box mr={1}>
                  <Link href={"/shop"}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 0, height: "50px" }}
                    >
                      Order Now
                    </Button>
                  </Link>
                </Box>
                <Box ml={1}>
                  <Link href={"/menu"}>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ borderRadius: 0, height: "50px" }}
                    >
                      View Menu
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box display={{ xs: "block", sm: "block", md: "none" }}>
              <Typography
                variant="h6"
                className={greatVibes.className}
                color={"primary"}
                mb={2}
              >
                Welcome
              </Typography>
              <Typography variant="h6" mb={2}>
                {image.caption}
              </Typography>
              <Typography color={"white"} mb={2}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </Typography>
              <Box display={"flex"} justifyContent={"center"}>
                <Box mr={1}>
                  <Link href={"/shop"}>
                    <Button
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 0, height: "50px" }}
                    >
                      Order Now
                    </Button>
                  </Link>
                </Box>
                <Box ml={1}>
                  <Link href={"/menu"}>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ borderRadius: 0, height: "50px" }}
                    >
                      View Menu
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HeaderCarousel;
