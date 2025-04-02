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

  // Animation values for the collage
  const anim1 = useRef(new Animated.ValueXY({ x: -150, y: -100 })).current; // Top-left start
  const anim2 = useRef(new Animated.ValueXY({ x: 150, y: 0 })).current; // Top-right start
  const anim3 = useRef(new Animated.ValueXY({ x: 0, y: 200 })).current; // Bottom-center start
  const rotate1 = useRef(new Animated.Value(0)).current;
  const rotate2 = useRef(new Animated.Value(0)).current;
  const rotate3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Logo fade animation
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

    // Collage animation
    Animated.stagger(250, [
      Animated.parallel([
        Animated.spring(anim1, {
          toValue: { x: -50, y: -20 }, // Top-left
          friction: 5,
          tension: 50,
          useNativeDriver: true,
        }),
        Animated.timing(rotate1, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.spring(anim2, {
          toValue: { x: 50, y: -10 }, // Top-right
          friction: 5,
          tension: 50,
          useNativeDriver: true,
        }),
        Animated.timing(rotate2, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.spring(anim3, {
          toValue: { x: 0, y: 80 }, // Bottom-center
          friction: 5,
          tension: 50,
          useNativeDriver: true,
        }),
        Animated.timing(rotate3, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [fadeAnim, anim1, anim2, anim3, rotate1, rotate2, rotate3]);

  // Interpolate rotation values
  const rotateDeg1 = rotate1.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg'],
  });
  const rotateDeg2 = rotate2.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '8deg'],
  });
  const rotateDeg3 = rotate3.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '-5deg'],
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navbar />

      <ImageBackground
        source={require('../assets/images/famm_logo.jpg')}
        style={styles.backgroundImage}
        blurRadius={8}
      >
        <Text style={styles.title}>Círculo de Mujeres</Text>
        <Animated.Image
          source={require('../assets/images/famm_logo.jpg')}
          style={[styles.smallLogo, { opacity: fadeAnim }]}
        />
      </ImageBackground>

      <Text style={styles.story}>
        Nacido de la fortaleza de mujeres valientes, este espacio ofrece recetas que han ayudado a sanar heridas y aliviar el dolor.
        Son platillos de amor, de resistencia y de un nuevo comienzo.
      </Text>

      {/* Collage as Central Piece */}
      <View style={styles.collageContainer}>
        <Animated.Image
          source={require('../assets/images/ceviche.webp')}
          style={[
            styles.collageImage,
            {
              transform: [
                { translateX: anim1.x },
                { translateY: anim1.y },
                { rotate: rotateDeg1 },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('../assets/images/threewoman_smiling.jpg')}
          style={[
            styles.collageImage,
            {
              transform: [
                { translateX: anim2.x },
                { translateY: anim2.y },
                { rotate: rotateDeg2 },
              ],
            },
          ]}
        />
        <Animated.Image
          source={require('../assets/images/bolas_de_verde.webp')}
          style={[
            styles.collageImage,
            {
              transform: [
                { translateX: anim3.x },
                { translateY: anim3.y },
                { rotate: rotateDeg3 },
              ],
            },
          ]}
        />
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
        <Image source={require('../assets/images/ceviche.webp')} style={styles.recipeImage} />
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
  collageContainer: {
    marginVertical: 60,
    height: 300, // Space for the collage
    width: '90%', // Match other content width
    position: 'relative',
    alignItems: 'center',
    marginBottom:0,
  },
  collageImage: {
    width: 160,
    height: 160,
    borderRadius: 10,
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
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
});

export default HomeScreen;