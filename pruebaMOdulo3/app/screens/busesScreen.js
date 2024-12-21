import { View, StyleSheet, TextInput, Alert } from 'react-native'
import { Button, Text } from '@rneui/base'
import { useState } from 'react'

export const PostForm = () => {
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
        <FAB
            title="+"
            placement='right'
            onPress={() => (navigation.navigate("GradeFormNav", { notita: null, fnRefresh: refresh }))}
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