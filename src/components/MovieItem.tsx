import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Movie from '../types/entities/Movie';

type MovieItemProps = {
  movie: Movie;
};

const MovieItem = ({movie}: MovieItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.year}>{movie.releaseYear}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  year: {
    fontSize: 14,
    color: '#888',
  },
});

export default MovieItem;
