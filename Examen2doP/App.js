import React, { useEffect, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Animated, StyleSheet, Dimensions, ImageBackground, ScrollView, Switch } from "react-native";

const SimpleHeader = () => {
  return (
    <View style ={styles.header}>
      <Text style={styles.title}>Noticias UPQ</Text>
    </View>
  );
};

export default function App() {
  return (

        <View>
          <SimpleHeader/>
          <ScrollView 
      showVerticalScrollIndicator={true}
      >
          <Text style={styles.title}>Deportes</Text>
          
            <View style={styles.card}>
              <Text style={styles.subtitle}>Titulo noticia deporte 1</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subtitle}>Titulo noticia deporte 2</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.</Text>
            </View>

            <Text style={styles.title}>Nacional</Text>
            <View style={styles.card}>
              <Text style={styles.subtitle}>Titulo noticia nacional 1</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subtitle}>Titulo noticia nacional 2</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.</Text>
            </View>

            <Text style={styles.title}>Entretenimiento</Text>
            <View style={styles.card}>
              <Text style={styles.subtitle}>Titulo noticia Entretenimiento 1</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.</Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.subtitle}>Titulo noticia Entretenimiento 2</Text>
              <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat.</Text>
            </View>

            
    </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
  },
  header: {
    height: 50,
    backgroundColor: '#0c5a80ff',
  },
  card: {
    height: 100,
    backgroundColor: '#546e7a',
    marginTop: 10, 
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 20,
  },
  title: {
    color: '#000000ff',
    fontSize:25,
    fontWeight:'bold'
  },
  subtitle: {
    color: '#000000ff',
    fontSize:20,
    fontWeight:'bold'
  }
});
