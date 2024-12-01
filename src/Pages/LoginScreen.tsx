import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <View style={styles.illustrationContainer}>
      <Image
        source={require('../Img/login.png')}
        style={styles.image}
/>
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.loginText}>Login</Text>
        <View style={styles.inputContainer}>
          <Icon name="mail-sharp" size={20} color="#888" style={styles.icon} />
          <TextInput placeholder="Email ID" style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Icon name="lock-closed-outline" size={20} color="#888" style={styles.icon} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        </View>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Alternative Login */}
        <Text style={styles.orText}>Or, login with ...</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-google" size={20} color="#EA4335" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-facebook" size={20} color="#1877F2" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-twitter" size={20} color="#1DA1F2" />
          </TouchableOpacity>
        </View>

        {/* Register Link */}
        <Text style={styles.registerText}>
          New to the app?{' '}
          <Text style={styles.registerLink}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
  },
  formContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  forgotButton: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: '#A020F0',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#A020F0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    marginHorizontal: 10,
    backgroundColor: '#FFF',
    borderRadius: 50,
    padding: 10,
    elevation: 3,
  },
  registerText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 14,
  },
  registerLink: {
    color: '#A020F0',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
