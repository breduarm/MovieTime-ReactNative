import { useEffect, useState } from 'react';
import { getMovies } from '../services/MovieService';
import Movie from '../types/entities/Movie';

const useFetchMovies = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const movies = await getMovies();
      setMovies(movies);
    } catch (error) {
      console.error(error);
      setError('There was an error fetching movies');
    } finally {
      setLoading(false);
    }
  };

  return {movies, loading, error};
};

export default useFetchMovies;
