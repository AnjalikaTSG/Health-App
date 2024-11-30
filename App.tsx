import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/Pages/LoginScreen'; // Ensure the path matches where LoginScreen is saved

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default App;
