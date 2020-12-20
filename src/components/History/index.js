import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import styles from "./style.js";
import CardHistory from "../cardHistory/"

export default function History({ onScroll, matches, winRate }) {
    
    const large = (Dimensions.get("screen").width) * 0.95

    return (
        <>
            <View style={{flexDirection:"row", marginLeft: 5}}>
                <Text style={ styles.winRate }>WIN RATE</Text>
                <Text style={ styles.winRate }>{winRate}%</Text>
            </View>
            
            <View style={{alignItems: "center"}}>
                <View style={styles.loss}>
                    <View style={{backgroundColor: "#1BA9BD", height: 13, width: (((large/100)) * winRate)}}>
                        <Text>{""}</Text>
                    </View>
                </View>
            </View>
            
            <FlatList style={styles.listStyle} onScroll={onScroll}
                data={matches}
                keyExtractor={(item) => item.gameId.toString()}
                renderItem={({ item }) => (
                    <CardHistory
                        queueName = {item.queue}
                        championImage={item.champion.image.splashMobile} 
                        matchTime={item.data.duration} 
                        win={item.data.win}
                        kda={item.data.kda}
                    />
                )}
            />
            
        </>
    );

}