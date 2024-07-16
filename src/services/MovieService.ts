import Movie from "../types/entities/Movie";
import { MovieResponse } from "../types/responses/MovieResponse";

export const getMovies = async (): Promise<MovieResponse[]> => {
  const response = await fetch('https://reactnative.dev/movies.json');
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const json = await response.json();
  return json.movies;
};

export const putMovieById = async (id: string, movieUpdated: Movie): Promise<MovieResponse> => {
  const request: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(movieUpdated),
  }
  const response = await fetch(`https://reactnative.dev/movies/${id}`, request);

  if (!response.ok) {
    throw new Error('Failed to update movie');
  }

  const json = await response.json();
  return json;
}
