import AOS from "@/templates/AOS";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const HomeSecFour = () => {
  const images = [
    "/images/menu/menu-1.jpg",
    "/images/menu/menu-2.jpg",
    "/images/menu/menu-3.jpg",
    "/images/menu/menu-4.jpg",
  ];
  return (
    <section>
      <Container>
        <Grid container py={10} spacing={10}>
          <Grid item xs={12} sm={6}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"100%"}
            >
              <AOS>
                <SectionTitle text1={"Discover"} text2={"OUR MENU"} />
                <Typography my={4} textAlign={"center"}>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </Typography>
                <Link href={"/menu"}>
                  <Button
                    variant="outlined"
                    sx={{ borderRadius: 0, height: "50px" }}
                  >
                    View Full Menu
                  </Button>
                </Link>
              </AOS>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={4}>
              {images.map((image, index) => (
                <Grid key={index} item xs={6}>
                  <img src={image} alt="Menu Item" width={"100%"} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default HomeSecFour;
