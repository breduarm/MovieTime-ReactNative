import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text>Movie Time</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
