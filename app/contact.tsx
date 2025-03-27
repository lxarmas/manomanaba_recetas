import React, { useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, SafeAreaView } from 'react-native';
import Navbar from './Navbar';

export default function Contact() {
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (!contact || !message) {
            Alert.alert('Error', 'Por favor ingresa tu teléfono o email y un mensaje.');
            return;
        }

        Alert.alert('Enviado', 'Tu mensaje ha sido enviado correctamente.');
        
        setContact('');
        setMessage('');
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Fixed Navbar */}
            <View style={styles.navbarContainer}>
                <Navbar />
            </View>

            {/* Scrollable Content BELOW Navbar */}
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>
                    📩 Nos podemos comunicar si nos das tu teléfono o email para contactarte.
                </Text>

                <View style={styles.card}>
                    <TextInput
                        style={styles.input}
                        placeholder="Teléfono o Email"
                        value={contact}
                        onChangeText={setContact}
                        keyboardType="email-address"
                        placeholderTextColor="#888"
                    />

                    <TextInput
                        style={[styles.input, styles.messageBox]}
                        placeholder="Escribe tu mensaje..."
                        value={message}
                        onChangeText={setMessage}
                        multiline
                        placeholderTextColor="#888"
                    />

                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Enviar Mensaje</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f7fa',
    },
    navbarContainer: {
        position: 'absolute', // Fixes Navbar at the top
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff', // Background to prevent overlap
        zIndex: 10, // Keeps Navbar on top
        elevation: 5, // Android shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    content: {
        paddingTop: 80, // Pushes content below the fixed Navbar
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        width: '100%',
        maxWidth: 400,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        borderRadius: 8,
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
        backgroundColor: '#fff',
    },
    messageBox: {
        height: 120,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
