import React, { useState } from "react";
import banner from "../../assets/movie2.jpg";
import { Box, Button, FormControl, Grid, TextField, Typography } from "@mui/material";
import { setKeywords, setPage } from "../../app/features/movie/action";
import { useDispatch } from "react-redux";

const Banner = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setKeywords(search));
    dispatch(setPage(1));
    window.location.href = "#listMovie";
  };
  return (
    <Box sx={{ position: "relative", top: "0", height: { xs: "85vh", sm: "65vh", md: "100vh" }, width: "100%" }}>
      <Box
        component="div"
        sx={{
          background: "rgb(11,11,11)",
          background: "radial-gradient(circle, rgba(11,11,11,0.12657563025210083) 0%, rgba(6,6,6,0.7232142857142857) 48%, rgba(0,0,0,0.7876400560224089) 100%)",
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      />
      <Box sx={{ position: "absolute", width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h2" color="white" sx={{ fontWeight: 500, fontFamily: "Anton", fontSize: { xs: "27px", sm: "35px", md: "60px" }, textAlign: "center", px: { xs: "30px", sm: 0 } }}>
              Film, acara TV tak terbatas, dan lebih banyak lagi.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" color="white" sx={{ fontWeight: 600, fontFamily: "Roboto", fontSize: { xs: "16px", sm: "26px", md: "30px" }, textAlign: "center" }}>
              Tonton di mana pun dan kapanpun.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h5" color="white" sx={{ fontWeight: 600, fontSize: { xs: "13px", sm: "20px" } }}>
              Siap menonton? Ayo cari film favorit dan jelajahi semuanya.
            </Typography>
          </Grid>
          <Grid item xs={12} textAlign="center">
            <form onSubmit={handleSubmit}>
              <FormControl sx={{ width: "100%" }}>
                <Box>
                  <TextField
                    color="info"
                    focused={true}
                    sx={{ input: { color: "white" }, bgcolor: "rgba(0,0,0,0.7)", width: { xs: "50%", sm: "40%" }, mr: { xs: "12px", sm: "30px" } }}
                    id="outlined-basic"
                    label="Cari Film"
                    variant="outlined"
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Button type="submit" variant="contained" color="danger" sx={{ color: "white", fontWeight: 600, width: { xs: "90px", sm: "12em" }, height: { xs: "55px", sm: "53px" } }}>
                    Cari
                  </Button>
                </Box>
              </FormControl>
            </form>
          </Grid>
        </Grid>
      </Box>
      <Box component="img" sx={{ height: "100%", width: "100%" }} src={banner} />
    </Box>
  );
};

export default Banner;
