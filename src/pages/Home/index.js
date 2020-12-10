import React from 'react';
import {
  View,
  TextInput,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

import Brand from "../../../assets/img/brand.svg";

export default function Home() {

  const navigation = useNavigation();

  let campoUser;
  let conteudocampoUser = "";

    return (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={styles.container}>
              <View style={styles.backgroundView}>
                <Image
                  source={require("../../../assets/img/bg.png")} 
                  style={styles.bgImage}
                />
              </View>
              <Brand
                height={131.45}
                width={300}
                style={styles.logo}
              />
            <View style={styles.inputContainer}>
              <TextInput
                ref={(inputUser) => (campoUser = inputUser)}
                onChangeText={(texto) => (conteudocampoUser = texto)}
                style={[styles.input, styles.borderBottom]}
                placeholder="Buscar invocador"
                placeholderTextColor="#8C8771"
                
              />

              <TouchableOpacity style={[styles.button, styles.borderBottom]} onPress={()=>{
                campoUser.clear();
                navigation.navigate('Main', {conteudocampoUser});
              }}>
                
                <Image 
                  source={require("../../../assets/lupaBuscar-new.png")}
                  style={styles.searchIcon}
                /> 
              </TouchableOpacity>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.copyRight}>Copyright © 2020 MUTRICA DOGS S.A.</Text>
            </View>

            </View>
        </>
      );
}