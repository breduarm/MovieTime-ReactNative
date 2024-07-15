import { MovieResponse } from "../types/responses/MovieResponse";

export const getMovies = async (): Promise<MovieResponse[]> => {
  const response = await fetch('https://reactnative.dev/movies.json');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await response.json();
  return json.movies;
};
