import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { moviesGetId } from "../../app/features/movie/action";
import { images } from "../../config/config";
const Description = () => {
  const { listMovieId } = useSelector((state) => state.movies);
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesGetId(id));
    window.scrollTo(0, 0);
  }, []);
  return (
    <Box bgcolor="primary.main" height={{ xs: "100%", sm: "70vh", md: "60vh" }} width="100%" pt="2vh" pb={{ xs: "100px", sm: "100px", md: "270px" }}>
      <Container align="center">
        <Box component="img" sx={{ maxWidth: { sm: "70%", md: "50%" }, height: { xs: 160, sm: 300 } }} src={images + listMovieId.backdrop_path} alt={listMovieId.title} />
        <Typography py="20px" variant="h4" color="info.main">
          {listMovieId.title}
        </Typography>
        <Typography py="20px" variant="h6" color="info.main" align="start">
          Overview
        </Typography>
        <Typography color="info.main" fontSize={{ xs: "14px", sm: "20px" }}>
          {listMovieId.overview}
        </Typography>
      </Container>
    </Box>
  );
};

export default Description;
