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
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

    return (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={styles.container}>
            <ImageBackground 
              style={styles.bgImage} 
              imageStyle={{ opacity: 0.3 }}
              source={require("../../../assets/bgImage.png")}
            >
              <Image
                style={styles.logo} 
                source={require("../../../assets/logo.png")}
              />
            <View style={styles.inputContainer}>
              <Image 
                  source={require("../../../assets/lupaBuscar.png")}
                  style={styles.searchIcon}
                /> 
              <TextInput
                style={styles.input}
                placeholder="Buscar invocador"
                placeholderTextColor="#CDBE91"
              />

              <TouchableOpacity style={styles.button} onPress={()=>{
                navigation.navigate('Main')
              }}>
                <Text style={styles.buttonText}>
                  {">"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.copyRight}>Copyright © 2020 OS PICAS company</Text>
            </View>

            </ImageBackground>
            </View>
        </>
      );
}