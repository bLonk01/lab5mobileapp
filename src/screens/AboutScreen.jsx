import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  const handleNamePress = () => {
    setEasterEggVisible(!easterEggVisible);
  };

  return (
    <MainLayout>
      <Text style={styles.title}>Incredible To-Do List App</Text>
      <TouchableOpacity onPress={handleNamePress}>
        <Text style={styles.name}>Created by Troy Escuadro</Text>
      </TouchableOpacity>
      {easterEggVisible && <Text style={styles.easterEgg}>Woah!!, you've found it !!! good job :D</Text>}
      <Text style={styles.date}>Current Date: {new Date().toLocaleDateString()}</Text>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  easterEgg: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
    color: 'green',
  },
  date: {
    marginTop: 20,
    fontSize: 16,
  },
});

export default AboutScreen;
