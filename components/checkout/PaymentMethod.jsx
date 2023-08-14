import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";

const PaymentMethod = () => {
  return (
    <Box bgcolor={"black"} py={5}>
      <Container>
        <Typography variant="h6" color={"white"} mb={3}>
          PAYMENT METHOD
        </Typography>
        <FormControl>
          <RadioGroup name="radio-buttons-group" sx={{ color: "#c49b63" }}>
            <FormControlLabel
              value="Direct Bank Tranfer"
              control={<Radio sx={{ color: "#c49b63" }} />}
              label="Direct Bank Tranfer"
            />
            <FormControlLabel
              value="Check Payment"
              control={<Radio sx={{ color: "#c49b63" }} />}
              label="Check Payment"
            />
            <FormControlLabel
              value="Paypal"
              control={<Radio sx={{ color: "#c49b63" }} />}
              label="Paypal"
            />
          </RadioGroup>
        </FormControl>
        <Box my={3}>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#c49b63" }} />}
            label=" I have read and accept the terms and conditions"
            sx={{ color: "#c49b63" }}
          />
        </Box>
        <Button
          variant="contained"
          sx={{ width: "100%", height: "50px", borderRadius: 0 }}
        >
          Place an order
        </Button>
      </Container>
    </Box>
  );
};

export default PaymentMethod;
