"use client";
import { Box, Container, Grid, useTheme } from "@mui/material";
import React from "react";
import Info from "./Info";
import BookTable from "./BookTable";

const HomeSecOne = () => {
  const theme = useTheme();

  return (
    <section>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Box bgcolor={"black"} py={2}>
            <Container>
              <Info />
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} position={"relative"}>
          <Box
            bgcolor={theme.palette.primary.main}
            color={"white"}
            height={"max-content"}
            position={"absolute"}
            bottom={0}
            zIndex={9}
            width={"100%"}
            py={2}
            display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
          >
            <BookTable />
          </Box>
          <Box
            bgcolor={theme.palette.primary.main}
            color={"white"}
            width={"100%"}
            py={2}
            display={{ xs: "block", sm: "block", md: "none", lg: "none" }}
          >
            <BookTable />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default HomeSecOne;
