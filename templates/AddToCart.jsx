"use client";
import { addToCart } from "@/store/cartSlice";
import { Box, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "100%",
  bgcolor: "#120f0f",
  boxShadow: 24,
  p: 4,
};

const AddToCart = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const handleAddingToCart = () => {
    const isFound = cart.find((e) => e.id === item.id);
    isFound === undefined ? dispatch(addToCart(item)) : handleOpen();
  };

  return (
    <Box>
      <Button
        variant="outlined"
        sx={{ height: "50px", borderRadius: 0 }}
        onClick={handleAddingToCart}
      >
        Add to cart
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-description"
            variant="h6"
            textAlign={"center"}
            color={"white"}
          >
            This product is already added to your shopping cart
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default AddToCart;
