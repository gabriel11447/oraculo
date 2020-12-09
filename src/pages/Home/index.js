import React, {useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";

import BgImage from "../../../assets/img/bg.svg";

export default function Home() {

  const navigation = useNavigation();

  let campoUser;
  let conteudocampoUser = "";

    return (
        <>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={styles.container}>
            <BgImage height={Dimensions.get('screen').height + 50} width={Dimensions.get('screen').width} style={styles.bgImage} />
              <Image
                style={styles.logo} 
                source={require("../../../assets/logo-new.png")}
              />
            <View style={styles.inputContainer}>
              <Image 
                  source={require("../../../assets/lupaBuscar-new.png")}
                  style={styles.searchIcon}
                /> 
              <TextInput
                ref={(inputUser) => (campoUser = inputUser)}
                onChangeText={(texto) => (conteudocampoUser = texto)}
                style={styles.input}
                placeholder="Buscar invocador"
                placeholderTextColor="#CDBE91"
                
              />

              <TouchableOpacity style={styles.button} onPress={()=>{
                campoUser.clear();
                navigation.navigate('Main', {conteudocampoUser});
              }}>
                
                <Text style={styles.buttonText}>
                  {">"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{flex:1}}>
              <Text style={styles.copyRight}>Copyright © 2020 MUTRICA DOGS S.A.</Text>
            </View>

            </View>
        </>
      );
}