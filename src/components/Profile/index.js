import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./style.js";


export default function Profile() {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Text style={styles.rankTypeText}>SOLO / DUO</Text>
        <Text style={styles.rankTypeText}>FLEX 5x5</Text>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.rankText}>BRONZE II</Text>
        <Text style={styles.rankText}>PRATA III</Text>
      </View>

      <View style={styles.rankImage}>
        <Image style={{ height: 180 }} source={require("../../../assets/rankIconBronze.png")} />
        <Image style={{ height: 180 }} source={require("../../../assets/rankIconPrata.png")} />
      </View>

    </View>
  );

}