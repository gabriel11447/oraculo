import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style.js";

export default function CardHistory({ matchTime, championImage, win, kda }) {

    function makeMinutes() {
        let minutes = Math.floor(matchTime / 60);
        let seconds = (((matchTime / 60) - minutes)*60).toFixed(0);
        if (seconds < 10) seconds = "0" + seconds;
        return `${minutes}:${seconds}`;
    }

    return(
        <View style={{flexDirection:"row", marginHorizontal:10, marginVertical: 7}}>
            <View style={win ? styles.cardWin : styles.cardLoss}>
                <Text>{""}</Text>
            </View>

            <View style={styles.match}>
                <ImageBackground
                    imageStyle={{opacity: 0.4}}
                    style={styles.cardImage}
                    source={{uri:`https://api-lol-pecege.herokuapp.com/datadragon${championImage}`}}
                >
                    <View style={styles.matchResult}>
                        {win ? 
                            <Text style={styles.matchResultText}>
                                V I T Ó R I A
                            </Text> :
                            <Text style={styles.matchResultText}>
                                D E R R O T A
                            </Text>
                        }
                    </View>
                    <View style={styles.matchInfo}>
                        <Text style={styles.matchInfoText}>
                            {makeMinutes()}
                        </Text>
                        <Text style={styles.matchInfoText}>
                            {kda}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View>  
    );

}