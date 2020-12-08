import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { Path } from "react-native-svg";
import styles from "./style.js";

export default function CardHistory({championID, gameID, gameTime, championIMG}) {

    return(
        <View style={{flexDirection:"row", marginHorizontal:10, marginVertical: 7}}>
            <View style={styles.cardWin}>
                <Text>{""}</Text>
            </View>

            <View style={styles.match}>
                <ImageBackground
                    imageStyle={{opacity: 0.4}}
                    style={styles.cardImage}
                    source={{uri:`https://api-lol-pecege.herokuapp.com${championIMG}`}}
                >
                    <View style={styles.matchResult}>
                        <Text style={styles.matchResultText}>
                            V I T Ó R I A
                        </Text>
                    </View>
                    <View style={styles.matchInfo}>
                        <Text style={styles.matchInfoText}>
                            35:11
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