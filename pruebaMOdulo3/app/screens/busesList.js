import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';

const DATA = [
    {
        codigo: "B01",
        max_personas: 38
    },
    {
        codigo: "B02",
        max_personas: 38
    }

];

export const BusesLista = ({ navigation }) => (
    <View style={styles.areaTitulo}>
        <Text style={styles.titulo}>BUSES</Text>
        <FlatList
            data={DATA}
        />
        <TouchableOpacity
            style={styles.boton}
            onPress={() => {
                navigation.navigate("InsertarBuses");
            }}
        >
            <Text style={styles.textoBoton}>Agregar Buses</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    areaBotones: {
        flex: 2,
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: "#ecfcd0",
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    areaTitulo: {
        flex: 1,
        margin: 10,
        justifyContent: 'flex-end',
        alignItems: "center",
        //backgroundColor: "skyblue"
    },
    boton: {
        backgroundColor: '#4CAF50',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    textoBoton: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
    }
});

