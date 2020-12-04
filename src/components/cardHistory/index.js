import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style.js";

export default function CardHistory() {
    return(
        <View style={{flexDirection:"row", marginHorizontal:10, marginVertical: 7}}>
            <View style={styles.cardWin}>
                <Text>{""}</Text>
            </View>

            <View style={styles.match}>
                <ImageBackground
                    imageStyle={{opacity: 0.4}}
                    style={styles.cardImage}
                    source={require("../../../assets/yasuoCard.png")}
                >
                    <View style={styles.matchResult}>
                        <Text style={styles.matchResultText}>
                            V I T Ó R I A
                        </Text>
                    </View>
                    <View style={styles.matchInfo}>
                        <Text style={styles.matchInfoText}>
                            35:18
                        </Text>
                        <Text style={styles.matchInfoText}>
                            11/13/10
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View>  
    );

}