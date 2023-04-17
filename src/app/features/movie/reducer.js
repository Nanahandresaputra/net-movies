import { GET_MOVIES, GET_MOVIES_ID, GET_MOVIES_SEARCH, SET_KEYWORDS, SET_PAGE } from "./constant";

const initialState = {
  listMovie: [],
  listMovieId: [],
  page: 1,
  keyword: "",
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, listMovie: action.payload };
    case GET_MOVIES_SEARCH:
      return { ...state, listMovie: action.payload };
    case GET_MOVIES_ID:
      return { ...state, listMovieId: action.payload };
    case SET_KEYWORDS:
      return { ...state, keyword: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
