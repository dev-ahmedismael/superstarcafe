"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeItem,
} from "@/store/cartSlice";
import Link from "next/link";

const Cart = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
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
    <section>
      <Box py={10}>
        <Container>
          <TableContainer sx={{ borderBottom: `1px solid white` }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead sx={{ bgcolor: theme.palette.primary.main }}>
                <TableRow>
                  <TableCell>
                    <Typography variant="h6" color={"white"}>
                      Product
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" color={"white"}>
                      Price
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" color={"white"}>
                      Quantity
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" color={"white"}>
                      Remove
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6" color={"white"}>
                      Total
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.map((item) => (
                  <TableRow
                    key={item.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                      bgcolor: "transparent",
                    }}
                  >
                    <TableCell component="th" scope="row">
                      <Box display={"flex"}>
                        <Box mr={10}>
                          <img
                            src={item.img}
                            alt={item.title}
                            width={80}
                            height={80}
                          />
                        </Box>
                        <Box width={300}>
                          <Typography
                            variant="h6"
                            textAlign={"center"}
                            color={"white"}
                          >
                            {item.title}
                          </Typography>
                          <Typography textAlign={"center"}>
                            {item.description}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Typography
                        color={"white"}
                      >{`$${item.price}.00`}</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        width={"100%"}
                      >
                        <Button
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          <AddIcon />
                        </Button>
                        <Box
                          px={3}
                          display={"flex"}
                          flexDirection={"column"}
                          justifyContent={"center"}
                          alignItems={"center"}
                        >
                          <Typography>{item.quantity}</Typography>
                        </Box>
                        <Button
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          <RemoveIcon />
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Button onClick={() => dispatch(removeItem(item.id))}>
                        <DeleteIcon />
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Typography color={"white"}>
                        {` $${(item.price * item.quantity).toFixed(2)}`}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box py={2}>
            {cart.length === 0 && (
              <Typography textAlign={"center"} color={"white"}>
                Your cart is empty!
              </Typography>
            )}
          </Box>
          <Box pt={5} maxWidth={300}>
            <Box py={3} border={`1px solid #6D6D6D`}>
              <Container>
                <Typography variant="h5" color={"white"} mb={3}>
                  CART TOTALS
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
          </Box>
          <Box pt={2}>
            <Link href={"/checkout"}>
              <Button
                variant="contained"
                sx={{ height: "50px", borderRadius: 0, width: "300px" }}
              >
                Proceed to checkout
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Cart;
