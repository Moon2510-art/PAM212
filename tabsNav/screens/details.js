import { View, Text, StyleSheet } from 'react-native';

export default function Details() {
    return (

        <View style = {styles.container}>
            <View style= {styles.iconRow}>
                <Text style = {styles.title}>Detalles de Usuario</Text>
                <Text>Usando navigation stack</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    iconRow: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'blue',
    },
});