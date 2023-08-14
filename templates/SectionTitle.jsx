import { greatVibes } from "@/app/layout";
import { Box, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ text1, text2 }) => {
  return (
    <Box>
      <Typography
        variant="h3"
        className={greatVibes.className}
        color={"primary"}
      >
        {text1}
      </Typography>
      <Typography variant="h4" color={"white"}>
        {text2}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
