import axios from "axios";
import { baseUrl, movies, apiKey, search } from "../../config/config";

export const getMovies = async (page) => {
  const result = await axios.get(`${baseUrl}/${movies}/popular?page=${page}&api_key=${apiKey}`);
  return result.data;
};
export const getMoviesById = async (id) => {
  const result = await axios.get(`${baseUrl}/${movies}/${id}?api_key=${apiKey}`);
  return result.data;
};
export const searchMovies = async ({ keyword, page }) => {
  const result = await axios.get(`${baseUrl}/${search}?page=${page}&api_key=${apiKey}&query=${keyword}`);
  return result.data;
};
