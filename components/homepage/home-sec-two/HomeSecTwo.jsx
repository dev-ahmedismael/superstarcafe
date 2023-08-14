import AOS from "@/templates/AOS";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const HomeSecTwo = () => {
  return (
    <section>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img
            src={"/images/about.jpg"}
            alt="About"
            width={"100%"}
            height={600}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Container>
            <Box bgcolor={"black"} py={3}>
              <Container>
                <AOS>
                  <Box>
                    <SectionTitle text1={"Discover"} text2={"OUR STORY"} />
                  </Box>

                  <Typography>
                    On her way she met a copy. The copy warned the Little Blind
                    Text, that where it came from it would have been rewritten a
                    thousand times and everything that was left from its origin
                    would be the word "and" and the Little Blind Text should
                    turn around and return to its own, safe country. But nothing
                    the copy said could convince her and so it didn’t take long
                    until a few insidious Copy Writers ambushed her, made her
                    drunk with Longe and Parole and dragged her into their
                    agency, where they abused her for their.
                  </Typography>
                </AOS>
              </Container>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </section>
  );
};

export default HomeSecTwo;
