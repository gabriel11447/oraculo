import { StyleSheet, Dimensions } from "react-native";

const large = Dimensions.get("screen").width

const styles = StyleSheet.create({
    cardChamp:{
        marginTop:10,
        opacity:0.7,
        width: 380
    },
    historyWin:{
        marginTop:10,
        marginLeft:5,
        padding:2,
        backgroundColor:"#1BA9BD",
        height:92,
        width: (large/100)
    },
    historyLoss:{
        marginTop:10,
        marginLeft:5,
        padding:2,
        backgroundColor:"#EC2040",
        height:92,
        width: (large/100)
    },

})

export default styles;