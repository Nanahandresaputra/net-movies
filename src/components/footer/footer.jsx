import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box bottom={0} width="100%">
      <Grid container spacing={2} justifyContent="center" alignItems="center" height="30vh" bgcolor="primary.light">
        <Grid item xs={6} align="center">
          <Typography variant="h2" component="h1" color="danger.dark" sx={{ fontFamily: "Bebas Neue", fontWeight: 300, fontSize: { xs: 25, sm: 40, md: 50 } }}>
            N E T M O V I E S
          </Typography>
          <Typography color="info.dark">Cari film yang kamu suka</Typography>
        </Grid>
        <Grid item xs={6} align="center" color="info.dark">
          <Typography fontSize={{ xs: "14px", sm: "20px" }}>Referensi api The Movie Database API</Typography>
          <Typography fontSize={{ xs: "14px", sm: "20px" }}>
            <i>NETMOVIES, List movie 2023</i>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
