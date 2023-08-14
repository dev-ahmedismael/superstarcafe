import { Box, Button, Typography } from "@mui/material";
import React from "react";

const TagCloud = () => {
  const tagCloud = [
    "Dish",
    "Menu",
    "Food",
    "Sweet",
    "Tasty",
    "Delicious",
    "Desserts",
    "Drinks",
  ];
  return (
    <Box>
      <Typography variant="h6" color={"white"} mb={2}>
        Tag Cloud
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"}>
        {tagCloud.map((tag) => (
          <Button key={"tag"} variant="outlined" sx={{ m: 1 }}>
            {tag}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default TagCloud;
