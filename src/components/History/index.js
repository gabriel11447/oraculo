import React from "react";
import { Text, Image, View, ScrollView } from "react-native";
import styles from "./style.js";
import CardHistory from "../cardHistory/"

export default function History() {

    return (
        <>
            <View style={{flexDirection:"row"}}>
                <Text style={ styles.winRate }>WIN RATE</Text>
                <Text style={ styles.winRate }>60%</Text>
            </View>
            
            <View style={{padding:5}}>
                <View style={styles.loss}>
                    <View style={styles.win}>
                        <Text style={{color:"#1BA9BD", fontSize:1}}>a</Text>
                    </View>
                </View>
            </View>

            <ScrollView>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
                <CardHistory/>
            </ScrollView>
            
            
            
        </>
    );

}