import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    rankTypeText:{
        color: "#E8BC2B",
        fontFamily:"Asul-Bold",
        fontSize:20,
        textAlign:"center",
        width: 130,
      },
      profileContainer:{
        paddingVertical:3,
        flexDirection:"row",
        justifyContent: "space-evenly",
      },
      rankText:{
        color: "#fff",
        fontFamily: "Asul-Regular",
        fontSize:16,
        textAlign: "center",
        width: 115,
      },
      rankImage:{
        flexDirection:"row", 
        justifyContent: "center",
        width: 400,
      }
})

export default styles;