import {
  Box,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const BillingDetails = () => {
  return (
    <Box py={10} bgcolor={"black"}>
      <Container>
        <Typography variant="h5" color={"white"} mb={5}>
          BILLING DETAILS
        </Typography>
        <form id="billing_details">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="First Name"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Last Name"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField variant="outlined" label="Country" fullWidth focused />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Street Address"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Apartment No"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Town / City"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Postcode / ZIP"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" label="Phone" fullWidth focused />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                label="Email Address"
                fullWidth
                focused
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl>
                <RadioGroup
                  name="radio-buttons-group"
                  sx={{ color: "#c49b63" }}
                >
                  <Box display={"flex"}>
                    <FormControlLabel
                      value="Create an Account?"
                      control={<Radio sx={{ color: "#c49b63" }} />}
                      label="Create an Account?"
                    />
                    <FormControlLabel
                      value="Ship to different address"
                      control={<Radio sx={{ color: "#c49b63" }} />}
                      label="Ship to different address"
                    />
                  </Box>
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  );
};

export default BillingDetails;
