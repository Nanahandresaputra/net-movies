import { getMovies, getMoviesById, searchMovies } from "../../api/api";
import { GET_MOVIES, GET_MOVIES_ID, GET_MOVIES_SEARCH, SET_KEYWORDS, SET_PAGE } from "./constant";

export const moviesGet = (page) => {
  return (dispatch) => {
    getMovies(page).then((res) =>
      dispatch({
        type: GET_MOVIES,
        payload: res,
      })
    );
  };
};

export const getMoviesSearch = () => {
  return (dispatch, getState) => {
    let keyword = getState().movies.keyword;
    let page = getState().movies.page;
    searchMovies({ keyword, page }).then((res) =>
      dispatch({
        type: GET_MOVIES_SEARCH,
        payload: res,
      })
    );
  };
};

export const moviesGetId = (id) => {
  return (dispatch) => {
    getMoviesById(id).then((res) =>
      dispatch({
        type: GET_MOVIES_ID,
        payload: res,
      })
    );
  };
};

export const setKeywords = (keyword) => {
  return {
    type: SET_KEYWORDS,
    payload: keyword,
  };
};
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};
