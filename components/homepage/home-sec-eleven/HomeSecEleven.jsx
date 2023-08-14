"use client";
import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import BookTable from "../home-sec-one/BookTable";

const HomeSecEleven = () => {
  const theme = useTheme();
  return (
    <section>
      <Box py={10} bgcolor={"black"}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              <img
                src="/images/gta.jpg"
                alt="Superstar Cafe Interior"
                width={"100%"}
                height={320}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box bgcolor={theme.palette.primary.main} py={7}>
                <BookTable />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default HomeSecEleven;
