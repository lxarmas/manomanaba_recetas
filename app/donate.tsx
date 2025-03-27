import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import Navbar from './Navbar';

export default function Donate() {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

    const handleDonation = async () => {
        if (!selectedAmount) {
            Alert.alert('Selecciona una cantidad', 'Por favor selecciona un monto para donar.');
            return;
        }

        // Process payment (Next step)
        Alert.alert('Gracias!', `Tu donación de $${selectedAmount} ha sido recibida.`);
    };

    return (
        <View style={styles.container}>
            <Navbar />
            <Text style={styles.title}>🍽️ Apoya nuestra causa</Text>
            <Text style={styles.description}>
                Con tu donación, podemos seguir enseñando recetas deliciosas y saludables.  
                Dona una vez o apóyanos cada mes. ¡Gracias por tu ayuda! 🙌
            </Text>

            <View style={styles.donationOptions}>
                {[5, 10, 20, 50].map(amount => (
                    <TouchableOpacity
                        key={amount}
                        style={[styles.donateButton, selectedAmount === amount && styles.selected]}
                        onPress={() => setSelectedAmount(amount)}
                    >
                        <Text style={styles.buttonText}>${amount}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.confirmButton} onPress={handleDonation}>
                <Text style={styles.confirmText}>Donar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: 60,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    donationOptions: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    donateButton: {
        backgroundColor: '#007BFF',
        padding: 12,
        margin: 5,
        borderRadius: 10,
    },
    selected: {
        backgroundColor: '#0056b3',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    confirmButton: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    confirmText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
