import React, { useEffect, useRef, useState } from "react";
import { View, Text, Animated, StyleSheet, Dimensions, ImageBackground, TextInput, Alert, Button, Switch  } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function SplashScreenPro() {
  const [showMain, setShowMain] = useState(false); // controla la pantalla principal
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Animaciones Splash
  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  // Switch
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);

   
  const enviarDatos = () => {
    if (nombre.trim() === '') {
      Alert.alert('Error', 'Por favor ingrese su nombre completo');
      alert('Error: Por favor ingrese su nombre completo');
    } 
    else if (email.trim() === ''){
      Alert.alert('Error', 'Por favor ingrese un correo electronico');
      alert('Error: Por favor ingrese su correo electronico');
    }
    else if (!emailRegex.test(email) ){
      Alert.alert('Error', 'Por favor ingrese un correo electronico VALIDO');
      alert('Error: Por favor ingrese un correo electronico VALIDO');
    }
    else if (!isSwitchOn){
      Alert.alert('Error', 'Por favor acepte los terminos y condiciones');
      alert('Error: Por favor acepte los terminos y condiciones');
    } else {
      Alert.alert('¡Éxito!', 'Datos enviados correctamente');
      alert('¡Éxito! Datos enviados correctamente');
    }
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    // Animación del texto: slide + fade
    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    // Después de 3s, fade-out del Splash y mostrar contenido principal
    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync(); // oculta splash de Expo
        setShowMain(true); // muestra contenido principal
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/BGP.jpg")}
        style={styles.background}
        resizeMode="cover" // 'cover' hace que la imagen llene toda la pantalla
      >
        <View style={styles.content}>
          <Text style={styles.text}>Registro de Usuario</Text>
          <TextInput
                  style={styles.input}
                  placeholder="Nombre Completo"
                  value={nombre}
                  onChangeText={setNombre}
                />
          
                <TextInput
                  style={styles.input}
                  placeholder="Correo Electronico"
                  value={email}
                  onChangeText={setEmail}
                />
                <Text style={styles.text2}>Aceptar terminos y condiciones</Text>
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }} 
                    thumbColor={isSwitchOn ? '#f5dd4b' : '#f4f3f4'} 
                    onValueChange={toggleSwitch} 
                    value={isSwitchOn} 
                />


          
                <Button color='gray' title="Registrarse" onPress={enviarDatos} />
          
        </View>
      </ImageBackground>
    );
  }

  // Splash animado
  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/IconP.png")}
        resizeMode="contain"
        style={[
          styles.logoImage,
          {
            opacity: fadeLogo,
            transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
          },
        ]}
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >
        PAM212
      </Animated.Text>
      <Animated.View
        style={[
          styles.loader,
          {
            opacity: fadeLogo,
            transform: [
              {
                translateX: slideText.interpolate({
                  inputRange: [0, height / 2],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b9b9b9ff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#626262ff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1, // ocupa toda la pantalla
    width: "100%", // ancho completo
    height: "100%", // alto completo
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "600",
  },
  text2: {
    color: "white",
    fontSize: 14,
    marginBottom: 10,
    textAlign: "left",
  },
  input:{
    color: '#cececeff',
    width:'100%',
    borderWidth:3,
    borderColor:'#cececeff',
    padding:12,
    borderRadius:9
  },
});