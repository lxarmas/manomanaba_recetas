import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Navbar from './Navbar';

const initialRecipes = [
  {
    id: '1',
    title: 'Ceviche de Concha',
    image: require('../assets/images/ceviche.webp'),
    ingredients: ['500g concha', '1 red onion', '2 limes', '1 tbsp cilantro', 'Salt to taste'],
    preparation: 'Chop onions, mix with lime juice and salt, then add concha and cilantro. Serve chilled.',
  },
  {
    id: '2',
    title: 'Bolas de Verde',
    image: require('../assets/images/bolas_de_verde.webp'),
    ingredients: ['3 green plantains', '200g cheese', '1 tbsp butter', 'Salt to taste'],
    preparation: 'Boil plantains, mash them, form balls with cheese inside, and fry until golden.',
  },
  {
    id: '3',
    title: 'Patacones',
    image: require('../assets/images/patacones.jpg'),
    ingredients: ['2 green plantains', 'Vegetable oil', 'Salt to taste'],
    preparation: 'Peel and slice plantains, fry until golden, smash them, and fry again. Add salt before serving.',
  },
];

export default function DetailsScreen() {
  const [recipes, setRecipes] = useState(initialRecipes);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newRecipe, setNewRecipe] = useState<{
    title: string;
    ingredients: string;
    preparation: string;
    image: string | null;
  }>({
    title: '',
    ingredients: '',
    preparation: '',
    image: null,
  });

  const toggleForm = () => setShowForm(!showForm);

  // Function to handle image picking
  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'You need to enable permissions to use this feature.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewRecipe((prev) => ({ ...prev, image: result.assets[0].uri }));
    }
  };

  // Function to handle taking a photo
  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'You need to enable camera access.');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewRecipe((prev) => ({ ...prev, image: result.assets[0].uri }));
    }
  };

  const addRecipe = () => {
    if (!newRecipe.title || !newRecipe.ingredients || !newRecipe.preparation || !newRecipe.image) {
      Alert.alert('Error', 'Please fill in all fields and select an image.');
      return;
    }

    const newId = (recipes.length + 1).toString();
    const ingredientsArray = newRecipe.ingredients.split(',').map((item) => item.trim());
    
    const newRecipeWithFormattedImage = {
    ...newRecipe,
    id: newId,
    ingredients: ingredientsArray,
    image: newRecipe.image
  };

    setRecipes([...recipes, newRecipeWithFormattedImage]);
    setNewRecipe({ title: '', ingredients: '', preparation: '', image: null });
    setShowForm(false);
    Alert.alert('Success', 'Recipe added!');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} style={styles.container}>
      <Navbar />
      {selectedRecipe ? (
        <View>
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
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Select a Recipe</Text>
          {recipes.map((recipe) => (
            <TouchableOpacity key={recipe.id} style={styles.recipeCard} onPress={() => setSelectedRecipe(recipe)}>
              <Image source={recipe.image} style={styles.recipeImage} />
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.addButton} onPress={toggleForm}>
            <Text style={styles.addButtonText}>{showForm ? 'Cancel' : 'Add Recipe'}</Text>
          </TouchableOpacity>
          {showForm && (
            <View style={styles.formContainer}>
              <TextInput style={styles.input} placeholder="Recipe Title" value={newRecipe.title} onChangeText={(text) => setNewRecipe({ ...newRecipe, title: text })} />
              <TextInput style={styles.input} placeholder="Ingredients (comma-separated)" value={newRecipe.ingredients} onChangeText={(text) => setNewRecipe({ ...newRecipe, ingredients: text })} />
              <TextInput style={[styles.input, styles.textArea]} placeholder="Preparation Steps" value={newRecipe.preparation} onChangeText={(text) => setNewRecipe({ ...newRecipe, preparation: text })} multiline />
              <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                <Text style={styles.imageButtonText}>Pick an Image</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageButton} onPress={takePhoto}>
                <Text style={styles.imageButtonText}>Take a Photo</Text>
              </TouchableOpacity>
              {newRecipe.image && <Image source={{ uri: newRecipe.image}} style={styles.recipeImage} />}
              <Button title="Submit Recipe" onPress={addRecipe} />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  scrollContent: { padding: 16, paddingBottom: 100 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  recipeCard: { backgroundColor: '#F8F8F8', marginBottom: 12, borderRadius: 10, padding: 10, alignItems: 'center', elevation: 2 },
  recipeImage: { width: 150, height: 100, borderRadius: 10 },
  recipeTitle: { fontSize: 16, fontWeight: 'bold' },
  addButton: { backgroundColor: '#e63946', padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  formContainer: { marginTop: 20, padding: 10, backgroundColor: '#F8F8F8', borderRadius: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 10 },
  textArea: { height: 100, textAlignVertical: 'top' },
  imageButton: { backgroundColor: '#007AFF', padding: 10, borderRadius: 5, alignItems: 'center', marginVertical: 5 },
  imageButtonText: { color: '#fff', fontSize: 16 },
  previewImage: { width: 100, height: 100, borderRadius: 10, alignSelf: 'center' },
});

