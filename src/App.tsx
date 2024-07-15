import React from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MovieList from './components/MovieList';
import useFetchMovies from './hooks/useFetchMovies';

function App(): React.JSX.Element {
  const {movies, loading, error} = useFetchMovies();

  if (loading) {
    return (
      <View style={[styles.container, styles.containerCentered]}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.containerCentered]}>
        <Text style={styles.textError}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <MovieList movies={movies} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  containerCentered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textError: {
    color: 'red',
  },
});

export default App;
