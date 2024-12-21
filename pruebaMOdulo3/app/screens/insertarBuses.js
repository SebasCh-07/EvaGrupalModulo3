import { StyleSheet, Text, View, FlatList, TouchableHighlight, TextInput } from 'react-native';
import { useState } from 'react';
import { FAB } from '@rneui/themed';
import { Input, Button } from '@rneui/base'


export const BusesScreen = () => {
    const [txtCajadeTexto1, setTxtCajadeTexto1] = useState('');
    const [txtCajadeTexto2, setTxtCajadeTexto2] = useState('');
    return <View StyleSheet={styles.container}>
        <View style={styles.container}></View>
        <Input
            value={txtCajadeTexto1}
            onChangeText={setTxtCajadeTexto1}
            placeholder='Codigo Bus'
            label='Bus'
        />
        <Input
            value={txtCajadeTexto2}
            onChangeText={setTxtCajadeTexto2}
            placeholder='Max Pasajeros'
            label='Bus'
            keyboardType='numeric'
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