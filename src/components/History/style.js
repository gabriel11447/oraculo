import { StyleSheet, Dimensions } from "react-native";

const large = Dimensions.get("screen").width

const styles = StyleSheet.create({
  winRate:{
    color: "#CDBE91",
    fontFamily:"Asul-Bold",
    fontSize:20,
    textAlign:"left",
    padding:10,
    marginRight:50
  },

  loss:{
    backgroundColor:"#EC2040",
    height:13,
    width: large - 30
  },

  win:{
    backgroundColor:"#1BA9BD",
    height:13,
    width: ((large/100)*60)
  },
  
})

export default styles;