import React from "react";
import data from "@/public/data/data.json";
import { Box, Container, Grid, Typography } from "@mui/material";
import AOS from "@/templates/AOS";

const Blog = () => {
  const blog = data.blog;
  return (
    <section>
      <Container>
        <Box py={10}>
          <AOS>
            <Grid container spacing={4}>
              {blog.map((e) => (
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
    </section>
  );
};

export default Blog;
