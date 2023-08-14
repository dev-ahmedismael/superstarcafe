import SectionTitle from "@/templates/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import data from "@/public/data/data.json";
import AOS from "@/templates/AOS";

const HomeSecTen = () => {
  const blog = data.blog;
  return (
    <section>
      <Box py={10}>
        <Container>
          <AOS>
            <Box display={"flex"} justifyContent={"center"}>
              <SectionTitle text1={"Recent"} text2={"FROM BLOG"} />
            </Box>
            <Typography textAlign={"center"} my={5}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </Typography>
          </AOS>
          <Box>
            <AOS>
              <Grid container spacing={4}>
                {blog.slice(0, 3).map((e) => (
                  <Grid key={e.id} item xs={12} sm={6} md={4}>
                    <Box>
                      <Box mb={2}>
                        <img
                          src={e.img}
                          alt={e.title}
                          width={"100%"}
                          height={250}
                        />
                      </Box>
                      <Box display={"flex"}>
                        <Typography fontSize={"small"} mr={1}>
                          {e.date}
                        </Typography>
                        <Typography fontSize={"small"} mr={1}>
                          {e.author}
                        </Typography>
                        <Typography fontSize={"small"}>
                          {e.comments} comments
                        </Typography>
                      </Box>
                      <Typography color={"white"} variant="h6" mb={2}>
                        {e.title}
                      </Typography>
                      <Typography>{e.description}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </AOS>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default HomeSecTen;
