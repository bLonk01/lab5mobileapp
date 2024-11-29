import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Footer = () => (
  <View style={styles.footer}>
    <Text>© 2024 Incredible To-Do List App</Text>
  </View>
);

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  footer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default MainLayout;
