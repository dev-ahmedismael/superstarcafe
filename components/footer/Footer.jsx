import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import MailIcon from "@mui/icons-material/Mail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import MessageIcon from "@mui/icons-material/Message";

const Footer = () => {
  const contactInfo = [
    {
      id: 1,
      icon: <MyLocationIcon />,
      description:
        "198 West 21th Street, Denver-Exeter Avenue, Algonquin, Liberty City.",
    },
    { id: 2, icon: <PhoneEnabledIcon />, description: "+20 (128) 652 - 3946" },
    { id: 3, icon: <MailIcon />, description: "dev.ahmedismael@outlook.com" },
  ];

  const blogs = [
    {
      id: 1,
      image: "/images/recent-blogs/image_1.jpg",
      title: "The opening of Superstar cafe in Liberty City",
      date: "Sep 17, 2008",
      author: "Admin",
      comments: 30,
    },
    {
      id: 2,
      image: "/images/recent-blogs/image_2.jpg",
      title: "Even the all-powerful Pointing has no control about",
      date: "Apr 08, 2009",
      author: "Admin",
      comments: 19,
    },
  ];
  return (
    <footer>
      <Container>
        <Box py={10}>
          <Grid container spacing={5} mb={10}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color={"white"} mb={5}>
                ABOUT US
              </Typography>
              <Typography>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" color={"white"} mb={5}>
                RECENT BLOGS
              </Typography>
              {blogs.map((blog) => (
                <Box key={blog.id} mb={3} display={"flex"}>
                  <Box mr={2}>
                    <img
                      src={blog.image}
                      alt="Blog Image"
                      width={70}
                      height={70}
                    />
                  </Box>
                  <Box>
                    <Typography mb={1}>{blog.title}</Typography>
                    <Box display={"flex"}>
                      <CalendarMonthIcon
                        fontSize={"small"}
                        sx={{ color: "white" }}
                      />
                      <Typography fontSize={"small"} mx={1}>
                        {blog.date}
                      </Typography>
                      <PersonIcon fontSize={"small"} sx={{ color: "white" }} />
                      <Typography fontSize={"small"} mx={1}>
                        {blog.author}
                      </Typography>
                      <MessageIcon fontSize={"small"} sx={{ color: "white" }} />
                      <Typography fontSize={"small"} mx={1}>
                        {blog.comments}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Typography variant="h6" color={"white"} mb={5}>
                SERVICES
              </Typography>
              <Typography mb={2}>Cooked</Typography>
              <Typography mb={2}>Deliver</Typography>
              <Typography mb={2}>Quality Foods</Typography>
              <Typography>Mixed</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" color={"white"} mb={5}>
                HAVE A QUESTION?
              </Typography>
              {contactInfo.map((e) => (
                <Box key={e.id} display={"flex"} mb={2}>
                  <Box color={"white"} mr={2}>
                    {e.icon}
                  </Box>
                  <Typography>{e.description}</Typography>
                </Box>
              ))}
            </Grid>
          </Grid>
          <Typography textAlign={"center"}>
            Copyright ©2023 All rights reserved
          </Typography>
          <Typography textAlign={"center"}>
            Developed with <FavoriteIcon /> by
            <Link href={"https://ahmedismael.vercel.app"} target="_blank">
              <Button>Ahmed Ismael</Button>
            </Link>
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
