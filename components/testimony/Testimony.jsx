import AOS from "@/templates/AOS";
import SectionTitle from "@/templates/SectionTitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Testimony = () => {
  const testimony = [
    {
      id: 1,
      img: "/images/persons/niko_bellic.jpeg",
      name: "Niko Bellic",
      job: "Serial Killer",
      comment:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.”",
    },
    {
      id: 2,
      img: "/images/persons/roman_bellic.jpg",
      name: "Roman Bellic",
      job: "Limousine Company Owner",
      comment:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.”",
    },
    {
      id: 3,
      img: "/images/persons/mallorie_barads.jpg",
      name: "Mallorie Barads",
      job: "Roman's Wife",
      comment:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”",
    },
    {
      id: 4,
      img: "/images/persons/little_jacob.jpg",
      name: "Little Jacob ",
      job: "Drug Dealer",
      comment:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however.”",
    },
    {
      id: 5,
      img: "/images/persons/dwayne_forge.jpg",
      name: "Dwayne Forge",
      job: "Nightclub Owner",
      comment:
        "“Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name. ”",
    },
  ];
  return (
    <section id="testimony">
      <Box py={10} position={"relative"} zIndex={3}>
        <AOS>
          <Box display={"flex"} justifyContent={"center"}>
            <SectionTitle text1={"Testimony"} text2={"CUSTOMERS SAYS"} />
          </Box>
          <Typography textAlign={"center"} my={5}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </Typography>
        </AOS>
        <AOS>
          <Grid container>
            {testimony.map((e) => (
              <Grid key={e.id} item xs={12} sm={12} md={12} lg>
                <Box
                  position={"relative"}
                  height={400}
                  display={{ xs: "none", sm: "none", md: "none", lg: "block" }}
                >
                  <Box
                    bgcolor={e.id % 2 === 0 ? "#B08B59" : "#C49B63"}
                    py={3}
                    position={"absolute"}
                    bottom={0}
                    width={"100%"}
                  >
                    <Container>
                      <Typography color={"white"}>{e.comment}</Typography>
                      <Box display={"flex"} mt={2}>
                        <Box width={40} height={40} mr={2}>
                          <img
                            src={e.img}
                            alt={e.name}
                            width={50}
                            height={50}
                            style={{ borderRadius: "100%" }}
                          />
                        </Box>
                        <Box>
                          <Typography color={"white"}>{e.name}</Typography>
                          <Typography color={"white"} fontSize={"small"}>
                            {e.job}
                          </Typography>
                        </Box>
                      </Box>
                    </Container>
                  </Box>
                </Box>
                <Box
                  display={{
                    xs: "block",
                    sm: "block",
                    md: "block",
                    lg: "none",
                  }}
                >
                  <Box
                    bgcolor={e.id % 2 === 0 ? "#B08B59" : "#C49B63"}
                    py={3}
                    width={"100%"}
                  >
                    <Container>
                      <Typography color={"white"}>{e.comment}</Typography>
                      <Box display={"flex"} mt={2}>
                        <Box width={40} height={40} mr={2}>
                          <img
                            src={e.img}
                            alt={e.name}
                            width={"100%"}
                            style={{ borderRadius: "100%" }}
                          />
                        </Box>
                        <Box>
                          <Typography color={"white"}>{e.name}</Typography>
                          <Typography color={"white"} fontSize={"small"}>
                            {e.job}
                          </Typography>
                        </Box>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </AOS>
      </Box>
    </section>
  );
};

export default Testimony;
