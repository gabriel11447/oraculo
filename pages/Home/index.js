import React from 'react';
import {
  View,
  TextInput,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import styles from "./styles";

export default function Home() {
    return (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={styles.container}>
            <ImageBackground 
              style={styles.bgImage} 
              imageStyle={{ opacity: 0.3 }}
              source={require("../../assets/bgImage.png")}
            >
              <Image
                style={styles.logo} 
                source={require("../../assets/logo.png")}
              />
            <View style={styles.inputContainer}>
              <TextInput 
                style={styles.input}
                placeholder="Buscar invocador"
                placeholderTextColor="#CDBE91"
              />
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>
                {">"}
              </Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            </View>
        </>
      );
}