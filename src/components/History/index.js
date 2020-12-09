import React from "react";
import { Text, View, FlatList, Dimensions } from "react-native";
import styles from "./style.js";
import CardHistory from "../cardHistory/"

export default function History({ onScroll, matches, winRate }) {
    
    const large = (Dimensions.get("screen").width)-30

    return (
        <>
            <View style={{flexDirection:"row", marginLeft: 5}}>
                <Text style={ styles.winRate }>WIN RATE</Text>
                <Text style={ styles.winRate }>{winRate}%</Text>
            </View>
            
            <View style={{marginHorizontal: 15,}}>
                <View style={styles.loss}>
                    <View style={{backgroundColor:"#1BA9BD", height:13, width: (((large/100)) * winRate)}}>
                        <Text>{""}</Text>
                    </View>
                </View>
            </View>
            
            <FlatList style={{marginBottom: 700}} onScroll={onScroll}
                data={matches}
                keyExtractor={(item) => item.gameId.toString()}
                renderItem={({ item }) => (
                    <CardHistory
                        championImage={item.champion.imagem.splashMobile} 
                        matchTime={item.dados.duration} 
                        win={item.dados.win}
                        kda={item.dados.kda}
                    />
                )}
            />
            
        </>
    );

}