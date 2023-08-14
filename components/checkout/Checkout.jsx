import { Box, Container, Grid } from "@mui/material";
import React from "react";
import BillingDetails from "./BillingDetails";
import Paragraph from "./Paragraph";
import TagCloud from "./TagCloud";
import SideRecentBlog from "./SideRecentBlog";
import SideCategories from "./SideCategories";
import SideSearch from "./SideSearch";
import PaymentMethod from "./PaymentMethod";
import CartTotal from "./CartTotal";

const Checkout = () => {
  return (
    <section>
      <Box py={10}>
        <Container>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={8}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <BillingDetails />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CartTotal />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <SideSearch />
                </Grid>
                <Grid item xs={12}>
                  <SideCategories />
                </Grid>
                <Grid item xs={12}>
                  <SideRecentBlog />
                </Grid>
                <Grid item xs={12}>
                  <TagCloud />
                </Grid>
                <Grid item xs={12}>
                  <Paragraph />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Checkout;
