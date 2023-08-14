import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import CoffeeIcon from "@mui/icons-material/Coffee";

const HomeSecFive = () => {
  const items = [
    { id: 1, number: 100, title: "Coffee Branches" },
    { id: 2, number: 85, title: "Number of Awards" },
    { id: 3, number: 10.567, title: "Happy Customer" },
    { id: 4, number: 900, title: "Staff" },
  ];
  return (
    <section id="statistics">
      <Grid container py={10}>
        {items.map((item) => (
          <Grid key={item.id} item xs={6} sm={3}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              position={"relative"}
              zIndex={5}
            >
              <Button variant="outlined" sx={{ padding: 2 }}>
                <CoffeeIcon fontSize="large" />
              </Button>
              <Typography variant="h4" color={"primary"} my={2}>
                {item.number}
              </Typography>
              <Typography color={"white"}>{item.title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default HomeSecFive;
