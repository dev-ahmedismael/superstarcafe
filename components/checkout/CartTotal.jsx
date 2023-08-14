"use client";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const cart = useSelector((state) => state.cart.cart);
  const subtotal = () => {
    let subtotal = 0;
    for (let i = 0; i < cart.length; i++) {
      subtotal += cart[i].price * cart[i].quantity;
    }
    return subtotal;
  };
  const total = () => {
    let total = subtotal() + 5;
    let discount = (3 * total) / 100;
    total = total - discount;
    return total;
  };
  return (
    <Box bgcolor={"black"} py={5} height={"100%"}>
      <Container>
        <Typography variant="h6" color="white" mb={3}>
          CART TOTAL
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography>Subtotal</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color={"white"}>{`$${subtotal().toFixed(
              2
            )}`}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Delivery</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color={"white"}>
              {cart.length > 0 ? `$5.00` : `$0.00`}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>Discount</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color={"white"}>
              {cart.length > 0 ? `3%` : `0%`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box borderBottom={"1px solid #6D6D6D"}></Box>
          </Grid>
          <Grid item xs={6}>
            <Typography>TOTAL</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography color={"primary"}>
              {cart.length > 0 ? `$${total().toFixed(2)}` : `$0.00`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CartTotal;
