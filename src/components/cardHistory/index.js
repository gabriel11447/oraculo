import React from "react";
import { Text, Image, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import styles from "./style.js";

export default function CardHistory() {
    return(
        <View style={{flexDirection:"row", padding:10}}>
            <View style={styles.historyWin}>
                <Text style={{color:"#1BA9BD", fontSize:1}}>a</Text>
            </View>

            <View style={styles.cardChamp}>
                <Image source={require("../../../assets/yasuoCard.png")}/>
            </View>
        </View>  
    );

}