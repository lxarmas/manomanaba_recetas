import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.hamburgerButton}>
        <Ionicons name={menuOpen ? 'close' : 'menu'} size={28} color="#FF0000" />
      </TouchableOpacity>
      {menuOpen && (
        <View style={styles.menu}>
          <Link href="/" asChild>
            <TouchableOpacity style={styles.link} onPress={() => setMenuOpen(false)}>
              <Text style={styles.text}>Inicio</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/details" asChild>
            <TouchableOpacity style={styles.link} onPress={() => setMenuOpen(false)}>
              <Text style={styles.text}>Recetas</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/about" asChild>
            <TouchableOpacity style={styles.link} onPress={() => setMenuOpen(false)}>
              <Text style={styles.text}>Nuestra Historia</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/contact" asChild>
            <TouchableOpacity style={styles.link} onPress={() => setMenuOpen(false)}>
              <Text style={styles.text}>Contactanos</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/donate" asChild>
            <TouchableOpacity style={styles.link} onPress={() => setMenuOpen(false)}>
              <Text style={[styles.text, styles.donateText]}>Dona ahora!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 20,
    zIndex: 10,
  },
  hamburgerButton: {
    padding: 10,
    backgroundColor: 'transparent',
  },
  menu: {
    position: 'absolute',
    top: 50,
    left: 0,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    width: 150,
  },
  link: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#e63946',
    textAlign: 'center',
  },
  donateText: {
    color: '#ff9800', // Makes the "Donate" button stand out
    fontWeight: 'bold',
  },
});

export default Navbar;

