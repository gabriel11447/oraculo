import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    perfil:{
        color: "#E8BC2B",
        fontFamily:"Asul-Regular",
        fontSize:20,
        textAlign:"center",
        width: 115,
      },
      profileContainer:{
        paddingVertical:3,
        flexDirection:"row",
        justifyContent: "space-evenly",
      },
      eloText:{
        color: "#fff",
        fontFamily: "Asul-Regular",
        fontSize:16,
        textAlign: "center",
        width: 115,
      },
      eloImage:{
        flexDirection:"row", 
        justifyContent: "center",
        width: 400,
      }
})

export default styles;