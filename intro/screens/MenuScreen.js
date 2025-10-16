import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextInputScreen from './TextInputScreen';
import ImageBGScreen from './ImageBGScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomSheetScreen from './BottomSheetScreen';


export default function MenuScreen() {
    const [screen,setScreen] = useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones': 
            return <BotonesScreen/>;
        case 'textInput':
            return <TextInputScreen/>;
        case 'imageBackground':
            return <ImageBGScreen/>;
        case 'scrollView':
            return <ScrollViewScreen/>;
        case 'activityIndicator':
            return <ActivityIndicatorScreen/>;
        case 'flatList':
            return <FlatListScreen/>;
        case 'modal':
            return <ModalScreen/>;
        case 'bottomSheet':
            return <BottomSheetScreen/>;
        case 'menu':
            default:
                return(
    <View style={styles.container}>
        <Text style={styles.texto}>Menu de Practicas</Text>
                <View style={styles.contenedorBotones}>
        <Button color='purple' onPress={()=>setScreen('contador')} title = 'Pract:Contador'/>
        <Button color='purple' onPress={()=>setScreen('botones')} title = 'Pract:Botones' />
        <Button color='purple' onPress={()=>setScreen('textInput')} title = 'Pract:TextInput' />
        <Button color='purple' onPress={()=>setScreen('imageBackground')} title = 'Pract:ImageBackground' />
        <Button color='purple' onPress={()=>setScreen('scrollView')} title = 'Pract:ScrollView' />
        <Button color='purple' onPress={()=>setScreen('activityIndicator')} title = 'Pract:ActivityIndicator' />
        <Button color='purple' onPress={()=>setScreen('flatList')} title = 'Pract:FlatList' />
        <Button color='purple' onPress={()=>setScreen('modal')} title = 'Pract:Modal' />
        <Button color='purple' onPress={()=>setScreen('bottomSheet')} title = 'Pract:BottomSheet' />
                </View>
    </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000ff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    contenedorBotones:{
        marginTop:15,
        flexDirection:'line',
        gap:20,
    },  

    texto: {
   color: '#7e00b4ff',
   fontSize: 30,
   fontFamily: 'Times New Roman',
   fontStyle: 'italic',
   textDecorationLine: 'underline',
  },

});