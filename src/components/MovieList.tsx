import React from 'react';
import { FlatList } from 'react-native';
import Movie from '../types/entities/Movie';
import MovieItem from './MovieItem';

type MovieListProps = {
  movies: Movie[];
};

const MovieList = ({movies}: MovieListProps) => {
  return (
    <FlatList
      data={movies}
      keyExtractor={item => item.id}
      renderItem={({item}) => <MovieItem movie={item} />}
    />
  );
};

export default MovieList;
