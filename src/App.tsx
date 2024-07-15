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

  return (
    <SafeAreaView style={styles.container}>
      {error ? (
        <View style={styles.containerCentered}>
          <Text style={styles.textError}>{error}</Text>
        </View>
      ) : loading ? (
        <View style={styles.containerCentered}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <MovieList movies={movies} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textError: {
    color: 'red',
  },
});

export default App;
