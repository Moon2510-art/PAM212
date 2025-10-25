import React from 'react';
import { ScrollView, StyleSheet, Text, View} from 'react-native-web';

const DATA = [
 {id:1},
 {id:2},
 {id:3},
 {id:4},
 {id:5},
 {id:6},
 {id:7},
 {id:8},
 {id:9},
 {id:10},
]; 

const SimpleHeader = () => {
  return (
    <View style ={styles.header}>
      <Text style={styles.title}>ScrollView Vertical</Text>
    </View>
  );
};

const SimpleScrollView = () => {
  return (
    <View style= {styles.container}>
      <SimpleHeader/>
      <ScrollView 
      showVerticalScrollIndicator={false}
      >
        {DATA.map(val => {
          return (
            <View style={styles.card} key = {val.id}>
              <Text style={styles.subtitle}> ¡Soy una tarjeta!</Text>
            </View>
          );
        })}
    </ScrollView>
  </View>
  );
};

export default SimpleScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26323b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 120,
    backgroundColor: '#37474f',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    color: '#fff',
    fontWeigt: 'bold',
    fontSize: 20,
  },
  card: {
    height: 100,
    backgroundColor: '#546e7a',
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});