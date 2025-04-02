import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';
import { Video } from 'expo-av'; // Necesitas instalar expo-av para videos
import Navbar from './Navbar';

export default function AboutUs() {
  return (
    <ScrollView style={styles.container}>
      <Navbar/>
      {/* Título */}
      <Text style={styles.title}>Sobre Nosotros</Text>

      {/* Video de presentación */}
      <Video
       source={require('../assets/images/woman_working.mp4')} // Reemplaza con tu URL de video
        style={styles.video}
        useNativeControls
        resizeMode={Video.RESIZE_MODE_COVER}
        isLooping
      />

      {/* Descripción */}
      <Text style={styles.text}>
        Bienvenidos a nuestra aplicación. Nos apasiona compartir recetas 
        auténticas y deliciosas para que disfrutes en casa.
      </Text>

      {/* Imagen Representativa */}
   <Video
       source={require('../assets/images/cooking_woman.mp4')} // Reemplaza con tu URL de video
        style={styles.video}
        useNativeControls
        resizeMode="cover"
        isLooping
      />

      {/* Sección de Misión */}
      <Text style={styles.subtitle}>Nuestra Misión</Text>
      <Text style={styles.text}>
        Creemos que la cocina debe ser accesible y divertida para todos. 
        Nuestro objetivo es facilitar el acceso a recetas detalladas y fáciles de seguir.
      </Text>


      <Text style={styles.subtitle}>Contáctanos</Text>
      <Text style={styles.text}>
        ¿Tienes preguntas o sugerencias? Escríbenos a: contacto@nuestraapp.com
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#555',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: '#666',
  },
});
