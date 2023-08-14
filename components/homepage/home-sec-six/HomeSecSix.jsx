import SectionTitle from "@/templates/SectionTitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import data from "@/public/data/data.json";
import AOS from "@/templates/AOS";

const HomeSecSix = () => {
  const coffee = data.menu.find((e) => e.title === "Coffee");
  return (
    <section>
      <Container>
        <Box
          py={10}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <AOS>
            <SectionTitle text1={"Discover"} text2={"BEST COFFEE SELLERS"} />
            <Typography my={5} textAlign={"center"}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </AOS>
          <Grid container spacing={3}>
            {coffee.dishes.map((dish) => (
              <Grid key={dish.id} item xs={12} sm={6} md={3}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                >
                  <img src={dish.img} alt={dish.title} width={"100%"} />
                  <Typography my={2}>{dish.title}</Typography>
                  <Typography mb={2}>{`$${dish.price.toFixed(2)}`}</Typography>
                  <Button variant="outlined" sx={{ borderRadius: 0 }}>
                    Add to cart
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default HomeSecSix;
