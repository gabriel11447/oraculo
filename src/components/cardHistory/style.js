import { StyleSheet, Dimensions } from "react-native";

const large = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    match:{
        marginTop:10,
        width: 380,
    },
    cardImage: {
        flex: 1,
        backgroundColor: "#2A3540",
        flexDirection: "row", 
        justifyContent: "space-between",
        width: 360, 
        height: 92
    },
    cardWin:{
        marginTop:10,
        marginLeft:5,
        padding:2,
        backgroundColor:"#1BA9BD",
        height:92,
        width: (large/100)
    },
    cardLoss:{
        marginTop:10,
        marginLeft:5,
        padding:2,
        backgroundColor:"#EC2040",
        height:92,
        width: (large/100)
    },
    matchResult: {
        flexDirection: "row",
    },
    matchResultText: {
        alignSelf: "center",
        marginLeft: 20,
        fontFamily: "Asul-Bold",
        fontSize: 24,
        color: "#CDBE91"
    },
    matchInfo: {
        marginVertical: 10,
        marginRight: 15,
        justifyContent: "space-between",
        alignItems: "flex-end"
    },
    matchInfoText: {
        fontFamily: "Asul-Bold",
        fontSize: 14,
        color: "#fff",

    },

})

export default styles;