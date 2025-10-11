//1.- Imports: Zona de imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react'

//2.- Main: Zona de componentes
export default function App() {

  const [contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}> {contador} </Text>
      
    <View style={styles.contenedorBotones}>
      <Button color='purple' title="Incrementar" onPress={()=>setContador(contador+1)}/>
      <Button color='purple' title="Quitar" onPress={()=>setContador(contador-1)}/>
      <Button color='purple' title="Reiniciar" onPress={()=>setContador(contador-contador)}/>
    </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

//3.- Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',  //Alieacion en eje x (start end center)
    justifyContent: 'center', //Alineacion en eje y (start end center)
  },
  texto: {
   color: '#7e00b4ff',
   fontSize: 30,
   fontFamily: 'Times New Roman',
   fontStyle: 'italic',
   textDecorationLine: 'underline',
  },

  texto2: {
   color: '#8000caff',
   fontSize: 48,
   fontFamily: 'Courier',
   fontWeight: '400',
   textDecorationLine: 'underline',
  },
  contenedorBotones: {
   marginTop: 15,
   flexDirection: 'row',
   gap:20,
  },
});
