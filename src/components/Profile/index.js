import React from "react";
import { Text, Image, View } from "react-native";


import styles from "./style.js";


export default function Profile({ rank }) {

  let rankUrl = "https://api-lol-pecege.herokuapp.com";

  let flexRank = rank.find(type => type.queueType == "RANKED_FLEX_SR");
  let soloRank = rank.find(type => type.queueType == "RANKED_SOLO_5x5");

  {
    !flexRank ? 
      flexRank = 
      { tier: "UNRANKED", rank: "", emblem: "/datadragon/ranked-emblems/UNRANKED" } : 
    flexRank

    !soloRank ? 
      soloRank = 
      { tier: "UNRANKED", rank: "", emblem: "/datadragon/ranked-emblems/UNRANKED" } : 
    soloRank
  }

  return (
    <View>
      <View style={styles.profileContainer}>
        <Text style={styles.rankTypeText}>SOLO / DUO</Text>
        <Text style={styles.rankTypeText}>FLEX 5x5</Text>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.rankText}>{`${soloRank.tier} ${soloRank.rank}`}</Text>
        <Text style={styles.rankText}>{`${flexRank.tier} ${flexRank.rank}`}</Text>
      </View>

      <View style={styles.rankImage}>
        <Image 
          style={{height: 149, width: 130}}
          source={{ 
            uri: `${rankUrl}${soloRank.emblem}`
          }}
        />
        <Image 
        style={{height: 149, width: 130}}
        source={{
            uri: `${rankUrl}${flexRank.emblem}`
        }}
        />
      </View>

    </View>
  );

}