import { Box, Container, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/movie2.jpg";

const About = () => {
  return (
    <Box height="70vh" display="flex" justifyContent="cente" alignItems="center">
      <Container>
        <Typography component="p" fontSize={{ xs: "15px", sm: "25px" }} color="info.main" align="center">
          NETMOVIES terinspirasi dari web penyedia streaming netflix, hanya saja NETMOVIES menggunakan api dari the movie databases api. Aplikasi ini memungkinkan untuk melihat list film dan mencari film kesukaan dan menampilkan deskripsi
          film tersebut.{" "}
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
