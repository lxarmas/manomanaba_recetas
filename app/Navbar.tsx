// /app/Navbar.tsx
import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Link href="/" style={styles.link}>
        <Text style={styles.text}>caca</Text>
      </Link>
      <Link href="/details" style={styles.link}>
        <Text style={styles.text}>Details</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#e63946',
  },
  link: {
    color: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Navbar;
