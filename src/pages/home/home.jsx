import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesSearch, moviesGet, moviesGetId, setPage } from "../../app/features/movie/action";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/banner";
import Navbar from "../../components/navbar/navbar";
import CardMovie from "../../components/cardMovie/cardMovie";
import { Box, Pagination } from "@mui/material";

const Home = () => {
  let { listMovie, page, keyword } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    keyword.length > 0 ? dispatch(getMoviesSearch()) : dispatch(moviesGet(page));
  }, [page, keyword]);

  const moviesList = listMovie.results;
  let result = "";
  moviesList?.length > 0 ? (result = `hasil pencarian ${keyword}`) : (result = `hasil pencarian ${keyword} tidak ditemukan`);

  let totalPages;
  listMovie.total_pages <= 500 ? (totalPages = listMovie.total_pages) : (totalPages = 500);

  const handleChanged = (event, value) => {
    dispatch(setPage(value));
  };

  return (
    <Box>
      <Navbar />
      <Banner />
      <CardMovie index={moviesList} result={result} keyword={keyword} />
      <Box component="a" width="100%" display="flex" justifyContent="center" alignItems="center" href="#listMovie" mb="3vh">
        <Pagination
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#fff",
            },
          }}
          color="info"
          shape="rounded"
          variant="outlined"
          count={totalPages}
          page={page}
          onChange={handleChanged}
        />
      </Box>
    </Box>
  );
};

export default Home;
