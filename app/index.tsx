import { Link } from 'expo-router';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.overlay}>
          <Text style={styles.title}>ManoManaba Recetas</Text>
          <Text style={styles.subtitle}>Descubre deliciosas recetas para cada ocasión</Text>
        </View>

 <Text style={styles.story}>
        Nacido de la fortaleza de mujeres valientes, este espacio ofrece recetas que han ayudado a sanar heridas y aliviar el dolor.
        Son platillos de amor, de resistencia y de un nuevo comienzo.


</Text>

<View style={styles.imageContainer}>
  <Image source={require('@/assets/images/womanlaughing.jpg')} style={styles.womanLaughingImage} />
  <Image source={require('@/assets/images/oldwomanlaughing.jpg')} style={styles.womanLaughingImage} />
</View>

<Text style={styles.story}>
  En muchas comunidades, las mujeres han encontrado en la cocina un refugio y una forma de cambiar su historia. 
  Cuando la noche termina con violencia, la mañana empieza con un plato que no solo cura el cuerpo, sino que también 
  brinda esperanza. Cada receta aquí es un símbolo de sanación y de la posibilidad de un futuro mejor.
</Text>
  <TouchableOpacity style={styles.button}>
            <Link href="/details" style={styles.buttonText}>Buscar Recetas</Link>
          </TouchableOpacity>

        <View style={styles.recipeCard}>
        </View>
        <View style={styles.recipeCard}>
          <Image source={require('@/assets/images/ceviche.webp')} style={styles.recipeImage} />

        </View>
      </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  backgroundImage: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
    width: '100%',
    paddingVertical: 40,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#f8f9fa',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  button: {
    marginTop:45 ,
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
  recipeScroll: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  recipeCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    marginRight: 15,
    alignItems: 'center',
    padding: 10,
  },

  recipeTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  story: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    lineHeight: 22,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontWeight:'bold'
  },  imageContainer: {
    flexDirection: 'row',  // Align images in a row
    justifyContent: 'space-between', // Even spacing between images
    alignItems: 'center',  // Center them vertically
    width: '90%',  // Adjust width to avoid edge contact
    marginVertical: 15, // Add space above and below
  },
  womanLaughingImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
});

