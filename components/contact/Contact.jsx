import AOS from "@/templates/AOS";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      title: "Address:",
      description:
        "198 West 21th Street, Denver-Exeter Avenue, Algonquin, Liberty City.",
    },
    { id: 2, title: "Phone:", description: "+20 (128) 652 - 3946" },
    { id: 3, title: "Email:", description: "dev.ahmedismael@outlook.com" },
    { id: 4, title: "Website:", description: "ahmedismael.vercel.app" },
  ];
  return (
    <section>
      <Box py={10}>
        <Container>
          <AOS>
            <Grid container spacing={5}>
              <Grid item xs={12} sm={6} md={5}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"space-between"}
                  height={"100%"}
                >
                  <Typography color={"white"} variant="h6">
                    Contact Information
                  </Typography>
                  {contactInfo.map((e) => (
                    <Box key={e.id} display={"flex"}>
                      <Typography color={"primary"} mr={1}>
                        {e.title}
                      </Typography>
                      <Typography color={"gray"}>{e.description}</Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={7}>
                <form id="contact">
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="Your Name"
                        variant="standard"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Your Email"
                        variant="standard"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField label="Subject" variant="standard" fullWidth />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        rows={6}
                        mul
                        label="Message"
                        variant="standard"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        sx={{ borderRadius: 0, height: 50, px: 5 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </AOS>
        </Container>
      </Box>
    </section>
  );
};

export default Contact;
