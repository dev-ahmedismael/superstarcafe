import { Box, Typography } from "@mui/material";
import React from "react";

const SideCategories = () => {
  const categories = [
    { id: 1, title: "Tour", count: "(12)" },
    { id: 2, title: "Hotel", count: "(22)" },
    { id: 3, title: "Coffee", count: "(37)" },
    { id: 4, title: "Drinks", count: "(42)" },
    { id: 5, title: "Foods", count: "(14)" },
    { id: 6, title: "Travel", count: "(140)" },
  ];
  return (
    <Box>
      <Typography variant="h6" color={"white"} mb={3}>
        Categories
      </Typography>
      <Box>
        {categories.map((cat) => (
          <Box
            key={cat.id}
            width={"100%"}
            display={"flex"}
            justifyContent={"space-between"}
            mb={3}
          >
            <Typography>{cat.title}</Typography>
            <Typography>{cat.count}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SideCategories;
