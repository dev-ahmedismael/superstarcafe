"use client";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import data from "@/public/data/data.json";
import HomeSecEight from "../homepage/home-sec-eight/HomeSecEight";
import AOS from "@/templates/AOS";
import SOS from "@/templates/SOS";

const Menu = () => {
  const theme = useTheme();
  const menu = data.menu;
  return (
    <section>
      <Box py={10}>
        <Container>
          <Grid container spacing={10}>
            {menu.map((e) => (
              <Grid key={e.id} item xs={12} sm={6} md={6}>
                <Typography variant="h5" color={"white"} mb={5}>
                  {e.title.toUpperCase()}
                </Typography>

                <Grid container spacing={3}>
                  {e.dishes.map((e) => (
                    <Grid key={e.id} item xs={12}>
                      <SOS>
                        <Box display={"flex"}>
                          <Box mr={2}>
                            <img
                              src={e.img}
                              alt={e.title}
                              width={60}
                              height={60}
                              style={{ borderRadius: "100%" }}
                            />
                          </Box>
                          <Box>
                            <Box mb={1} display={"flex"}>
                              <Box
                                bgcolor={"black"}
                                whiteSpace={"nowrap"}
                                px={1}
                                display={{
                                  xs: "none",
                                  sm: "none",
                                  md: "block",
                                }}
                              >
                                <Typography variant="h6" color={"white"}>
                                  {e.title}
                                </Typography>
                              </Box>
                              <Box
                                bgcolor={"black"}
                                px={1}
                                display={{
                                  xs: "block",
                                  sm: "block",
                                  md: "none",
                                }}
                              >
                                <Typography color={"white"}>
                                  {e.title}
                                </Typography>
                              </Box>
                              <Box
                                width={"100%"}
                                display={"flex"}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                px={1}
                              >
                                <Box
                                  width={"100%"}
                                  height={3}
                                  borderBottom={`1px dashed ${theme.palette.primary.main}`}
                                ></Box>
                              </Box>
                              <Box
                                bgcolor={"black"}
                                px={1}
                                display={{
                                  xs: "none",
                                  sm: "none",
                                  md: "block",
                                }}
                              >
                                <Typography variant="h6" color={"primary"}>
                                  {`$${e.price}.00`}
                                </Typography>
                              </Box>
                              <Box
                                bgcolor={"black"}
                                px={1}
                                display={{
                                  xs: "flex",
                                  sm: "flex",
                                  md: "none",
                                }}
                                flexDirection={"column"}
                                justifyContent={"center"}
                                alignItems={"center"}
                              >
                                <Typography color={"primary"}>
                                  {`$${e.price}.00`}
                                </Typography>
                              </Box>
                            </Box>
                            <Typography>{e.description}</Typography>
                          </Box>
                        </Box>
                      </SOS>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            ))}
          </Grid>
          <HomeSecEight />
        </Container>
      </Box>
    </section>
  );
};

export default Menu;
