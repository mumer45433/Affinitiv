import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Switch,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { loginscreenStyles as styles } from '../../styles/styles';

const LoginScreen = ({ navigation }) => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!id.trim()) newErrors.id = 'ID is required';
    if (!username.trim()) newErrors.username = 'Username is required';
    if (!password.trim()) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validateForm()) {
      navigation.navigate('App');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined} // Android uses adjustResize
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.imageSection}>
              <Image
                source={require('../../assets/bg.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.logoOverlay}>
                <Text style={styles.title}>Affinitiv</Text>
                <Text style={styles.subtitle}>Car Research Powered by Affinitiv</Text>
              </View>
            </View>

            <View style={styles.formSection}>
              <Text style={styles.loginText}>Log in</Text>
              <Text style={styles.welcomeText}>
                Welcome back! Please enter your details
              </Text>

              {/* ID Input */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, errors.id && styles.inputError]}
                  value={id}
                  onChangeText={(text) => {
                    setId(text);
                    if (errors.id) setErrors({ ...errors, id: '' });
                  }}
                  placeholder="Enter your ID"
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                />
                {errors.id && <Text style={styles.errorText}>{errors.id}</Text>}
              </View>

              {/* Username Input */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, errors.username && styles.inputError]}
                  value={username}
                  onChangeText={(text) => {
                    setUsername(text);
                    if (errors.username) setErrors({ ...errors, username: '' });
                  }}
                  placeholder="Enter your username"
                  placeholderTextColor="#999"
                  autoCapitalize="none"
                />
                {errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
              </View>

              {/* Password Input */}
              <View style={styles.inputContainer}>
                <TextInput
                  style={[styles.input, errors.password && styles.inputError]}
                  value={password}
                  onChangeText={(text) => {
                    setPassword(text);
                    if (errors.password) setErrors({ ...errors, password: '' });
                  }}
                  placeholder="Enter your password"
                  placeholderTextColor="#999"
                  secureTextEntry
                />
                {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
              </View>

              {/* Options */}
              <View style={styles.optionsContainer}>
                <View style={styles.rememberMeContainer}>
                  <Switch
                    value={rememberMe}
                    onValueChange={setRememberMe}
                    trackColor={{ false: '#767577', true: '#1a73e8' }}
                    thumbColor={rememberMe ? '#fff' : '#f4f3f4'}
                  />
                  <Text style={styles.rememberMeText}>Remember me</Text>
                </View>

                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>Forget password?</Text>
                </TouchableOpacity>
              </View>

              {/* Login Button */}
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>

              <Text style={styles.versionText}>v2.0.0</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
