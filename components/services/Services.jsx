"use client";
import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import AOS from "@/templates/AOS";

const Services = () => {
  const theme = useTheme();
  const services = [
    {
      id: 1,
      imageUrl: "/images/services/1.png",
      title: "EASY TO ORDER",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      id: 2,
      imageUrl: "/images/services/2.png",
      title: "FASTEST DELIVERY",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
    {
      id: 3,
      imageUrl: "/images/services/3.png",
      title: "QUALITY COFFEE",
      description:
        "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.",
    },
  ];

  return (
    <section>
      <Box py={10} bgcolor={theme.palette.primary.main}>
        <Container>
          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid key={service.id} item xs={12} sm={4}>
                <AOS>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box border={"1px solid black"} p={2} mb={3}>
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        width={70}
                      />
                    </Box>
                    <Typography variant="h5" color={"black"} mb={3}>
                      {service.title}
                    </Typography>
                    <Typography color={"black"} mb={3} textAlign={"center"}>
                      {service.description}
                    </Typography>
                  </Box>
                </AOS>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Services;
