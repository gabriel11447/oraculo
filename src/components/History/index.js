import React from "react";
import { Text, View, ScrollView, Animated } from "react-native";
import styles from "./style.js";
import CardHistory from "../cardHistory/"

export default function History({ onScroll }) {

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

            <ScrollView style={{marginBottom: 700}} onScroll={onScroll}>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>

            </ScrollView>
            
        </>
    );

}