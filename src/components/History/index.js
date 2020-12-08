import React from "react";
import { Text, View, FlatList } from "react-native";
import styles from "./style.js";
import CardHistory from "../cardHistory/"

export default function History({ onScroll, matchs }) {
    
    return (
        <>
            <View style={{flexDirection:"row", marginLeft: 5}}>
                <Text style={ styles.winRate }>WIN RATE</Text>
                <Text style={ styles.winRate }>60%</Text>
            </View>
            
            <View style={{marginHorizontal: 15,}}>
                <View style={styles.loss}>
                    <View style={styles.win}>
                        <Text>{""}</Text>
                    </View>
                </View>
            </View>
            
            <FlatList style={{marginBottom: 700}} onScroll={onScroll}
                data={matchs}
                keyExtractor={(item) => item.gameId.toString()}
                renderItem={({ item }) => (
                    <CardHistory championIMG={item.champion.imagem.splashMobile} championID={item.champion.key} gameTime={item.timestamp} gameID={item.gameId}/>
                )}
            />
            
        </>
    );

}