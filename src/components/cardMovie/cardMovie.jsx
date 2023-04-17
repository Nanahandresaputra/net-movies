import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";
import banner from "../../assets/movie2.jpg";
import { Link } from "react-router-dom";
import { baseUrl, images } from "../../config/config";

const CardMovie = ({ index, result, keyword }) => {
  // console.log(index);
  return (
    <Box bgcolor="primary.main" id="listMovie">
      <Container>
        <Typography variant="h2" color="info.main" py="20px" align="center">
          List Movies
        </Typography>
        <Typography variant="h5" color="info.main" py="20px" align="center">
          {keyword?.length > 0 ? result : null}
        </Typography>

        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
          {index &&
            index.map((idx, i) => (
              <Grid item xs={6} sm={4} md={3} align="center" pb="50px" key={i}>
                <Link to={`/description/${idx.id}`} style={{ textDecoration: "none" }}>
                  <Card sx={{ maxWidth: { xs: 130, sm: 220 }, height: "100%", border: "1px solid #606060" }}>
                    <CardActionArea>
                      <CardMedia component="img" sx={{ height: { xs: 170, sm: 290 } }} image={images + idx.poster_path} alt="Movie" />
                      <CardContent sx={{ bgcolor: "black" }}>
                        <Typography variant="h6" component="p" color="info.main" align="center" sx={{ fontSize: { xs: 9, sm: 18 }, height: { xs: "50", sm: "75px" } }}>
                          {idx.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CardMovie;
