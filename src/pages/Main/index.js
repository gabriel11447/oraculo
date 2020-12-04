import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated
} from 'react-native';
import styles from "./styles";
import Profile from "../../components/Profile/";
import History from "../../components/History/";

import BgImage from "../../../assets/img/bg.svg";
import Flag from "../../../assets/img/flag.svg";

export default function Main() {
  const [profileButton, setProfileButton] = useState(true);
  const [matchButton, setMatchButton] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

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

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, 920-480],
    outputRange: [460, 240],
    extrapolate: 'clamp'
  });

  const opacityValue = animatedValue.interpolate({
    inputRange: [0, 920-560],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  const marginTopValue = animatedValue.interpolate({
    inputRange: [0, 920-560],
    outputRange: [0, -50],
    extrapolate: 'clamp'
  });

    return (
      
        <View style={styles.pageContainer}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <View style={styles.container}>
            <BgImage height={Dimensions.get('screen').height + 50} width={Dimensions.get('screen').width} style={styles.bgImage} />

            <Animated.View style={profileButton ? {height: 460} : { height: headerHeight } }>
                <Animated.View style={[styles.flagContainer, profileButton ? {opacity: 1} : {opacity: opacityValue}]}>
                  <Flag />
                </Animated.View>

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
                <Animated.View style={!profileButton && {marginTop: marginTopValue}}>
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
                </Animated.View>
                                    
              </View>
              </Animated.View>

            <View>
              <View style={styles.perfilContainer}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleProfileButton}
                  >
                  <Text style={[ styles.menuText, profileButton && styles.menuTextHighlight ]}>PERFIL</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleMatchButton}
                  >
                  <Text style={[ styles.menuText, matchButton && styles.menuTextHighlight ]}>PARTIDAS</Text>
                </TouchableOpacity>
              </View>
              {profileButton ?
                <Profile /> :
                <History 
                  onScroll={Animated.event(
                    [{ nativeEvent: {
                        contentOffset: {
                          y: animatedValue
                        },
                      }
                    }], {useNativeDriver: false})}
                  />
              }
            </View>
          </View>
        </View>
      );
}
