import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import Profile from "../../components/Profile/";
import History from "../../components/History/";
import Back from "../../../assets/img/back.svg";
import Flag from "../../../assets/img/flag.svg";

import FlagTrim from "../../components/FlagTrim/index";

const HighValue = Dimensions.get("window").width > 360 ? 400 : 350;
const LowValue = Dimensions.get("window").width > 360 ? 200 : 240;
const LowMarginValue = Dimensions.get("window").width > 360 ? 40 : 60;

export default function Main({ userName }) {
  const [profileButton, setProfileButton] = useState(true);
  const [matchButton, setMatchButton] = useState(false);
  const [animatedValue] = useState(new Animated.Value(0));

  function handleProfileButton() {
    if (profileButton) {
      return;
    }
    setMatchButton(!matchButton);
    setProfileButton(!profileButton);
  }

  function handleMatchButton() {
    if (matchButton) {
      return;
    }
    setProfileButton(!profileButton);
    setMatchButton(!matchButton);
  }
  const navigation = useNavigation();

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HighValue * 2 - 480],
    outputRange: [HighValue, LowValue],
    extrapolate: "clamp",
  });

  const opacityValue = animatedValue.interpolate({
    inputRange: [0, HighValue * 2 - 560],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const marginTopValue = animatedValue.interpolate({
    inputRange: [0, HighValue * 2 - 560],
    outputRange: [90, LowMarginValue],
    extrapolate: "clamp",
  });

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const searchUser = async () => {
      try {
        const urlUser =
          "https://api-lol-pecege.herokuapp.com/summoner/" + userName;
        const userResponse = await axios.get(urlUser);
        setUser(userResponse.data);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    searchUser();
  }, []);

  return !loading ? (
    <View style={styles.pageContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButtonImage}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back />
        </TouchableOpacity>

        <View style={styles.backgroundView}>
          <Image
            source={require("../../../assets/img/bg.png")}
            style={styles.bgImage}
          />
        </View>

        <Animated.View
          style={
            profileButton ? { height: HighValue } : { height: headerHeight }
          }>
          <Animated.View
            style={[
              styles.flagContainer,
              profileButton ? { opacity: 1 } : { opacity: opacityValue },
            ]}>
            <Flag
              height={Dimensions.get("window").width > 360 ? 460 : 430}
              width={Dimensions.get("window").width > 360 ? 247 : 231}
            />
            <FlagTrim rank={user.summoner.rank} />
          </Animated.View>

          <View style={styles.flag}>
            <Text style={styles.summonerName}>{user.summoner.name}</Text>
            <Animated.View
              style={[
                styles.iconContainer,
                !profileButton && { marginTop: marginTopValue },
              ]}>
              <ImageBackground
                style={styles.summonerIcon}
                imageStyle={{ borderRadius: 50 }}
                source={{
                  uri: `https://api-lol-pecege.herokuapp.com/datadragon/iconProfile/${user.summoner.profileIconId}`,
                }}>
                <Image
                  style={styles.iconBorder}
                  source={{
                    uri:
                      "https://static.wikia.nocookie.net/leagueoflegends/images/d/d7/Level_75_Summoner_Icon_Border.png/revision/latest?cb=20180324105840",
                  }}
                />
                <Text style={styles.summonerLevel}>
                  {user.summoner.summonerLevel}
                </Text>
              </ImageBackground>
            </Animated.View>
          </View>
        </Animated.View>

        <View style={styles.menuTab}>
          <View style={styles.perfilContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleProfileButton}>
              <Text
                style={[
                  styles.menuText,
                  profileButton && styles.menuTextHighlight,
                ]}>
                PERFIL
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleMatchButton}>
              <Text
                style={[
                  styles.menuText,
                  matchButton && styles.menuTextHighlight,
                ]}>
                PARTIDAS
              </Text>
            </TouchableOpacity>
          </View>
          {profileButton ? (
            <>
              {animatedValue.setValue(0)}
              <Profile rank={user.summoner.rank} />
            </>
          ) : (
            <History
              matches={user.matches}
              winRate={user.winRate}
              onScroll={Animated.event(
                [
                  {
                    nativeEvent: {
                      contentOffset: {
                        y: animatedValue,
                      },
                    },
                  },
                ],
                { useNativeDriver: false },
              )}
            />
          )}
        </View>
      </View>
    </View>
  ) : (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <View style={styles.backgroundView}>
          <Image
            source={require("../../../assets/img/bg.png")}
            style={styles.bgImage}
          />
        </View>
        {error ? (
          <>
            <TouchableOpacity
              style={styles.backButtonImage}
              onPress={() => {
                navigation.goBack();
              }}>
              <Back />
            </TouchableOpacity>
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>
                Erro ao encontrar o invocador
              </Text>
            </View>
          </>
        ) : (
          <View style={{ height: "100%", justifyContent: "center" }}>
            <ActivityIndicator size="large" color="#CDBE91" />
          </View>
        )}
      </View>
    </View>
  );
}
