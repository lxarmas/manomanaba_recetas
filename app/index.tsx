import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
  Animated,
  Easing,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar';
import { WebView } from 'react-native-webview';

const HomeScreen = () => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.8,
          duration: 2000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      {/* Header Section */}
      <ImageBackground source={require('../assets/images/famm_logo.jpg')} style={styles.backgroundImage} blurRadius={8}>
        <Animated.Image
          source={require('../assets/images/famm_logo.jpg')}
          style={[styles.smallLogo, { opacity: fadeAnim }]}
        />
        <Text style={styles.title}>Círculo de Mujeres</Text>
      </ImageBackground>

      <Text style={styles.story}>
        Nacido de la fortaleza de mujeres valientes, este espacio ofrece recetas que han ayudado a sanar heridas y aliviar el dolor.
        Son platillos de amor, de resistencia y de un nuevo comienzo.
      </Text>

      {/* Images Section */}
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/womanlaughing.jpg')} style={styles.womanImage} />
        <Image source={require('../assets/images/oldwomanlaughing.jpg')} style={styles.womanImage} />
      </View>

      <Text style={styles.story}>
        En muchas comunidades, las mujeres han encontrado en la cocina un refugio y una forma de cambiar su historia.
        Cuando la noche termina con violencia, la mañana empieza con un plato que no solo cura el cuerpo, sino que también brinda esperanza.
        Cada receta aquí es un símbolo de sanación y de la posibilidad de un futuro mejor.
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('details')}>
        <Text style={styles.buttonText}>Buscar Recetas</Text>
      </TouchableOpacity>

      {/* Embedded Instagram Video */}
      <View style={styles.videoContainer}>
        <WebView 
          source={{ uri: 'https://www.instagram.com/reel/C7QHJKpILlk/embed/' }} 
          style={styles.video} 
          allowsFullscreenVideo
          javaScriptEnabled
          domStorageEnabled
        />
      </View>

      {/* Recipe Card */}
      <View style={styles.recipeCard}>
        <Image source={require('@/assets/images/ceviche.webp')} style={styles.recipeImage} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    marginBottom: 23,
    width: '100%',
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  smallLogo: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
    opacity: 0.5,
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#900C3F',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  story: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    lineHeight: 22,
    marginHorizontal: 10,
    marginTop: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#e63946',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginVertical: 15,
  },
  womanImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
  },
  recipeImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
  videoContainer: {
    width: '90%',
    height: 300,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 20,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
