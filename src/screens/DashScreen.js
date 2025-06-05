import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function DashScreen() {
  return (
    <View style={styles.container}>
      <Text variant="titleLarge">TELA DE DASHBOARDS E FILTROS</Text>
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