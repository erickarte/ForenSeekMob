import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function CasosScreen() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">TELA DE CASOS E GERENCIAMENTO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});