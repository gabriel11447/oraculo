import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import styles from "./styles";

export default function Main() {
    return (
      <View style={styles.pageContainer}>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
          <View style={styles.container}>
            <View style={styles.flagContainer}>
              <Image
                source={require("../../assets/flag.png")}
              />
              <Image 
                style={styles.rankBanner}
                source={require("../../assets/rankflag.png")}
              />
            </View>
            <ImageBackground 
              style={styles.bgImage}
              imageStyle={{ opacity: 0.3 }}
              source={require("../../assets/bgImage.png")}>
            </ImageBackground>
            <View style={styles.flag}>
              <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
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
                <TouchableOpacity>
                  <Text style={styles.perfil}>PERFIL</Text>
                </TouchableOpacity>
                
                <TouchableOpacity>
                  <Text style={styles.partidas}>PARTIDAS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      );
}

