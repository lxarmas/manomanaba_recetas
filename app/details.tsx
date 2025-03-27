import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Navbar from './Navbar';
const recipes = [
  {
    id: '1',
    title: 'Ceviche de Concha',
    image: require('../assets/images/ceviche.webp'),
    ingredients: ['500g concha', '1 red onion', '2 limes', '1 tbsp cilantro', 'Salt to taste'],
    preparation: 'Chop onions, mix with lime juice and salt, then add concha and cilantro. Serve chilled.'
  },
  {
    id: '2',
    title: 'Bolas de Verde',
    image: require('../assets/images/bolas_de_verde.webp'),
    ingredients: ['3 green plantains', '200g cheese', '1 tbsp butter', 'Salt to taste'],
    preparation: 'Boil plantains, mash them, form balls with cheese inside, and fry until golden.'
  },
  {
    id: '3',
    title: 'Patacones',
    image: require('../assets/images/patacones.jpg'),
    ingredients: ['2 green plantains', 'Vegetable oil', 'Salt to taste'],
    preparation: 'Peel and slice plantains, fry until golden, smash them, and fry again. Add salt before serving.'
  },
];

export default function DetailsScreen() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (selectedRecipe) {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{selectedRecipe.title}</Text>
        <Image source={selectedRecipe.image} style={styles.recipeImage} />
        <Text style={styles.sectionTitle}>Ingredients:</Text>
        {selectedRecipe.ingredients.map((ingredient, index) => (
          <Text key={index} style={styles.ingredient}>{`• ${ingredient}`}</Text>
        ))}

        <Text style={styles.sectionTitle}>Preparation:</Text>
        <Text style={styles.preparation}>{selectedRecipe.preparation}</Text>

        <TouchableOpacity onPress={() => setSelectedRecipe(null)} style={styles.goBackButton}>
          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <Navbar/>
      <Text style={styles.title}>Select a Recipe</Text>
      {recipes.map((recipe) => (
        <TouchableOpacity
          key={recipe.id}
          style={styles.recipeCard}
          onPress={() => setSelectedRecipe(recipe)}
        >
          <Image source={recipe.image} style={styles.recipeImage} />
          <Text style={styles.recipeTitle}>{recipe.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  recipeCard: {
    backgroundColor: '#F8F8F8',
    marginBottom: 12,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,  // Adds shadow for Android devices
  },
  recipeImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  recipeTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  ingredient: {
    fontSize: 16,
    marginLeft: 10,
    marginTop: 5,
  },
  preparation: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 22,
  },
  goBackButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  goBackText: {
    color: 'white',
    fontSize: 16,
  },
});
