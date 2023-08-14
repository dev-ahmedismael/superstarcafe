import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";

const BookTable = () => {
  return (
    <Container>
      <Box display={"flex"}>
        <Typography variant="h6" color={"white"}>
          BOOK A TABLE
        </Typography>
        <Box pl={1}>
          <LocalBarIcon />
        </Box>
      </Box>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField label="First Name" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last Name" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Date" type="date" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Phone" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Message" variant="standard" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              sx={{
                width: "100%",
                height: "100%",
                bgcolor: "black",
                borderRadius: 0,
                "&:hover": { bgcolor: "white" },
              }}
            >
              Appointment
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default BookTable;
