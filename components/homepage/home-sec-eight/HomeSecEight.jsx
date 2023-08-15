"use client";
import SectionTitle from "@/templates/SectionTitle";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import data from "@/public/data/data.json";
import AOS from "@/templates/AOS";

const HomeSecEight = () => {
  const theme = useTheme();
  const categories = ["Main Dish", "Desserts", "Drinks"];
  const [activeCategory, setActiveCategory] = useState("Main Dish");
  const menu = data.menu;
  const [activeSection, setActiveSection] = useState(
    menu.find((e) => e.title === activeCategory)
  );

  return (
    <section>
      <Container>
        <Box py={10}>
          <Box display={"flex"} justifyContent={"center"}>
            <SectionTitle text1={"Discover"} text2={"OUR PRODUCTS"} />
          </Box>
          <Typography my={5} textAlign={"center"}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
          <Box>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              justifyContent={"center"}
              mb={5}
            >
              {categories.map((cat) => (
                <Box key={cat} p={1}>
                  <Button
                    variant={activeCategory === cat ? "contained" : ""}
                    sx={{
                      color:
                        activeCategory === cat
                          ? "black"
                          : theme.palette.primary.main,
                      height: 50,
                      px: 3,
                      borderRadius: 0,
                      borderBottom: `1px solid ${theme.palette.primary.main}`,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.main,
                        color: "black",
                      },
                    }}
                    onClick={() => {
                      setActiveCategory(cat);
                      setActiveSection(menu.find((e) => e.title === cat));
                    }}
                  >
                    {cat}
                  </Button>
                </Box>
              ))}
            </Box>
            <AOS>
              <Grid container spacing={3}>
                {activeSection.dishes.slice(0, 3).map((e) => (
                  <Grid key={e.id} item xs={12} sm={4}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <img
                          src={e.img}
                          alt={e.title}
                          width={"100%"}
                          height={300}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          variant="h6"
                          color={"white"}
                          textAlign={"center"}
                        >
                          {e.title}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography textAlign={"center"}>
                          {e.description}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography
                          textAlign={"center"}
                          variant="h6"
                          color={"white"}
                        >{`$${e.price.toFixed(2)}`}</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Box display={"flex"} justifyContent={"center"}>
                          <Button
                            variant="outlined"
                            sx={{ height: "50px", borderRadius: 0 }}
                          >
                            Add to cart
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </AOS>
          </Box>
        </Box>
      </Container>
    </section>
  );
};

export default HomeSecEight;
