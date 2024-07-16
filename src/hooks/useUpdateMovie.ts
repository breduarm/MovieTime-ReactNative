import { useState } from 'react';
import { putMovieById } from '../services/MovieService';
import Movie from '../types/entities/Movie';

const useUpdateMovie = () => {
  const [updating, setUpdating] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const updateMovieById = async (
    id: string,
    updatedMovie: Movie,
  ): Promise<Movie | null> => {
    setUpdating(true);
    try {
      const updatedMovieResponse = await putMovieById(id, updatedMovie);
      return updatedMovieResponse;
    } catch (error) {
      console.error(error);
      setError('There was an error updating the movie');
      return null;
    } finally {
      setUpdating(false);
    }
  };

  return {updating, error, updateMovieById};
};

export default useUpdateMovie;
