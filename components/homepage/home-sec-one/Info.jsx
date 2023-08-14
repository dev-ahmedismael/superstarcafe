import React from "react";
import CallIcon from "@mui/icons-material/Call";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, Grid, Typography, useTheme } from "@mui/material";

const Info = () => {
  const theme = useTheme();

  const info = [
    {
      id: 1,
      icon: <CallIcon color="primary" />,
      title: "0020 (128) 652-3946",
      description:
        "A small river named Duden flows by their place and supplies.",
    },
    {
      id: 2,
      icon: <GpsFixedIcon color="primary" />,
      title: "198 West 21th Street",
      description: "Denver-Exeter Avenue, Algonquin, Liberty City.",
    },
    {
      id: 3,
      icon: <AccessTimeIcon color="primary" />,
      title: "Open Monday-Friday",
      description: "8:00am - 9:00pm",
    },
  ];
  return (
    <Grid container spacing={2}>
      {info.map((info) => (
        <Grid item key={info.id} xs={12} sm={12} md={4}>
          <Box display={"flex"}>
            <Box px={1}>{info.icon}</Box>
            <Box>
              <Typography variant="h6" color={"white"}>
                {info.title}
              </Typography>
              <Typography>{info.description}</Typography>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Info;
