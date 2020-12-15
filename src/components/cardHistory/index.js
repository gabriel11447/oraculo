import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./style.js";

export default function CardHistory({ matchTime, championImage, win, kda, queueName}) {

    
    function makeQueueName(){

        let queue = "";

        if(queueName == 450){
            queue = "ARAM";
        } else if(queueName == 400){
            queue = "NORMAL"
        } else if(queueName == 420){
            queue = "RANKED SOLO"
        } else if(queueName == 440){
            queue = "RANKED FLEX";
        } else {
            queue = "SPECIAL"
        }
        return queue;
    }

    return(
        <View style={{flexDirection:"row", alignSelf: "center", marginVertical: 7}}>
            <View style={win ? styles.cardWin : styles.cardLoss}>
                <Text>{""}</Text>
            </View>

            <View style={styles.match}>
                <ImageBackground
                    imageStyle={{opacity: 0.4}}
                    style={styles.cardImage}
                    source={{uri:`https://api-lol-pecege.herokuapp.com${championImage}`}}
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
                            {makeQueueName()}
                        </Text>
                        <Text style={styles.matchInfoText}>
                            {kda}
                        </Text>
                        <Text style={styles.matchInfoText}>
                            {matchTime}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </View>  
    );

}