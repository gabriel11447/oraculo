import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from "./styles";
import Profile from "../../components/Profile/";
import History from "../../components/History/";


export default function Main() {
  const [profileButton, setProfileButton] = useState(true);
  const [matchButton, setMatchButton] = useState(false);

  function handleProfileButton() {
    if(profileButton) return;
    setMatchButton(!matchButton);
    setProfileButton(!profileButton);
  }

  function handleMatchButton() {
    if (matchButton) return;
    setProfileButton(!profileButton);
    setMatchButton(!matchButton);
    
  }
  const navigation = useNavigation();
    return (
      
        <View style={styles.pageContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
            <View style={styles.container}>
              <View style={styles.flagContainer}>
                <Image
                  source={require("../../../assets/flag.png")}
                />
                <Image 
                  style={styles.rankBanner}
                  source={require("../../../assets/rankflag.png")}
                />
              </View>
              <ImageBackground 
                style={styles.bgImage}
                imageStyle={{ opacity: 0.3 }}
                source={require("../../../assets/bgImage.png")}>
              </ImageBackground>
              
              <View style={styles.flag}>
                <View style={{flexDirection:"row"}}>
                  <TouchableOpacity onPress={()=>{
                    navigation.goBack()
                  }}>
                  <Text style={styles.buttonText}>
                      {"<"}
                  </Text>
                  </TouchableOpacity>
                  <Text style={styles.summonerName}>
                    Caitando Sucata
                  </Text>
                </View>
                
                <ImageBackground
                  style={styles.summonerIcon}
                  imageStyle={{ borderRadius: 50 }}
                  source={{uri: "https://pbs.twimg.com/media/ETVfqtAXkAA0nc2.jpg"}}
                >
                <Image
                  style={styles.iconBorder}
                  source={{uri: "https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Level_75_Summoner_Icon_Border.png/revision/latest?cb=20180324105840"}}
                />
                <Text style={styles.summonerLevel}>
                  69
                </Text>
                </ImageBackground>                    
              </View>
                       
              <View>
                <View style={styles.perfilContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleProfileButton}
                  >
                    <Text style={[ styles.textDesign, !profileButton && {opacity: 0.5} ]}>PERFIL</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleMatchButton}
                  >
                    <Text style={[ styles.textDesign, !matchButton && {opacity: 0.5} ]}>PARTIDAS</Text>
                  </TouchableOpacity>
                </View>
                {profileButton ? 
                 <Profile/>:
                 <History/>
                }
              </View>
            </View>
          </View>
      
      );
}

