import { StyleSheet, Text, View, FlatList, TextInput, Button, Alert, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export const insertarRutas = ({ navigation }) => {
    const [txtCajadeTexto1, setTxtCajadeTexto1] = useState('');
    const [txtCajadeTexto2, setTxtCajadeTexto2] = useState('');
    return <View StyleSheet={styles.container}>
        <View style={styles.container}></View>
        <TextInput
            placeholder='Codigo Bus'
            style={styles.Input}
            value={txtCajadeTexto1}
            onChangeText={setTxtCajadeTexto1}
        />
        <TextInput
            placeholder='Max Pasajeros'
            style={styles.Input}
            value={txtCajadeTexto2}
            onChangeText={setTxtCajadeTexto2}
        />
        <Button title='Enviar'
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
    }
});