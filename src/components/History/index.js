import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "./style.js";
import CardHistory from "../cardHistory/"

export default function History() {

    function handleScroll() {

    }

    return (
        <>
            <View style={{flexDirection:"row"}}>
                <Text style={ styles.winRate }>WIN RATE</Text>
                <Text style={ styles.winRate }>60%</Text>
            </View>
            
            <View style={{padding:5}}>
                <View style={styles.loss}>
                    <View style={styles.win}>
                        <Text style={{color:"#1BA9BD", fontSize:1}}>{""}</Text>
                    </View>
                </View>
            </View>

            <ScrollView onScroll={handleScroll}>
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
                <CardHistory/>
                <CardHistory/>
            </ScrollView>
            
            
            
        </>
    );

}