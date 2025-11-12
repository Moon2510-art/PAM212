import React, {useRef, useMemo} from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";
import BottomSheet, {BottomSheetView}  from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function BottomSheetS(){
  const BottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [1, '25%', '50%']);

  const openSheet = () => {
    BottomSheetRef.current?.expand();
  };

  return(
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Button
          title="Abrir"
          onPress={openSheet}
        />
      </View>
      <BottomSheet
        ref={BottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose = {true}
        backgroundStyle={styles.BSheet}
      >
        <BottomSheetView
          style={styles.BView}
        >
          <Text>BottomSheet Ejemplo!!</Text> 
          <Image
            style={styles.IMG}
            source={require('../assets/Dog.png')}
          />
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#463c3cff',
    alignItems:'center',
    justifyContent:'center'
  },
  BSheet:{
    backgroundColor:'#282727ff'
  },
  BView:{
    flex:1,
    alignItems:'center'
  },
  IMG:{
    marginTop:50,
    height:200,
    width:200
  }
});