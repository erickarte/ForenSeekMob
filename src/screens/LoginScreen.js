import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@forenseek.com' && password === 'admin123') {
      Alert.alert('Sucesso', 'Bem-vindo, Administrador!');
      navigation.replace('MainApp'); // Para não permitir voltar ao login
    } else if (email === 'perito@forenseek.com' && password === 'perito123') {
      Alert.alert('Sucesso', 'Bem-vindo, Perito!');
      navigation.replace('MainApp');
    } else if (email === 'assistente@forenseek.com' && password === 'assistente123') {
      Alert.alert('Sucesso', 'Bem-vindo, Assistente!');
      navigation.replace('MainApp');
    } else {
      Alert.alert('Erro', 'Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge">Login</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        label="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin}>
        Entrar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
});

export default LoginScreen;
