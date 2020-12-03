import React from "react";
import { Text, Image, View } from "react-native";
import styles from "./style.js";


export default function Profile() {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Text style={styles.perfil}>SOLO / DUO</Text>
        <Text style={styles.perfil}>FLEX 5x5</Text>
      </View>

      <View style={styles.profileContainer}>
        <Text style={styles.eloText}>BRONZE II</Text>
        <Text style={styles.eloText}>PRATA III</Text>
      </View>

      <View style={styles.eloImage}>
        <Image style={{ height: 150 }} source={require("../../../assets/rankIconBronze.png")} />
        <Image style={{ height: 150 }} source={require("../../../assets/rankIconPrata.png")} />
      </View>

    </View>
  );

}