import { Grid } from "@mui/material";
import React from "react";

const HomeSecSeven = () => {
  const gallery = [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
  ];
  return (
    <section>
      <Grid container>
        {gallery.map((img) => (
          <Grid key={img} item xs={6} sm={3}>
            <img src={img} alt="Gallery Image" width="100%" height={300} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default HomeSecSeven;
