import { StyleSheet, Text, View, Button, TouchableOpacity, FlatList } from 'react-native';
import {Ruta} from './rutaScreen'


export const HOME = ({ navigation }) => {
    return (<View style={styles.container}>
        <View style={styles.areaTitulo}>
            <Text style={styles.titulo}>HOME</Text>
        </View>
        <View style={styles.areaBotones}>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => {
                    navigation.navigate("Rutas");
                }}
            >
                <Text style={styles.textoBoton}>RUTAS</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => {
                  navigation.navigate("listasBuses");
              }}
            >
                <Text style={styles.textoBoton}>BUSES</Text>
            </TouchableOpacity>

        </View>
    </View>
    );
}

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
      alignItems: 'center',
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
    },
    areaContenido: {
        flex: 6,
        //backgroundColor: "lightblue",
      },
});