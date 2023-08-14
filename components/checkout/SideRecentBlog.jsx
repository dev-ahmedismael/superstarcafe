import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import data from "@/public/data/data.json";

const SideRecentBlog = () => {
  const blog = data.blog;
  return (
    <Box>
      <Typography variant="h6" color={"white"} mb={3}>
        Recent Blog
      </Typography>
      <Grid container spacing={4}>
        {blog.slice(0, 3).map((e) => (
          <Grid key={e.id} item xs={12}>
            <Box display={"flex"}>
              <Box mr={2}>
                <img src={e.img} alt={e.title} width={60} height={60} />
              </Box>
              <Box>
                <Box display={"flex"}>
                  <Typography fontSize={"small"} mr={1}>
                    {e.date}
                  </Typography>
                  <Typography fontSize={"small"} mr={1}>
                    {e.author}
                  </Typography>
                </Box>

                <Typography>{e.description}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SideRecentBlog;
