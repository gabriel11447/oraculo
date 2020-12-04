import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    backgroundColor: "#1F2229",
  },
  container: {
    flexDirection: "column",
  },
  bgImage: {
    flex: 1,
    zIndex: -1,
    position: "absolute",
  },
  flagContainer: {
    position: "absolute",
    top: -60,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  flag: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 240,
  },
  summonerName: {
    color: "#E8BC2B",
    fontFamily:"Asul-Bold",
    fontSize: 28,
    textAlign: "center",
    marginTop: 28,
    marginBottom: 0,
    marginRight:60
  },
  summonerIcon: {
    height: 95,
    width: 95,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBorder: {
    height: 175,
    width: 175,
    justifyContent: "center",
    alignItems: "center",
  },
  summonerLevel: {
    color: "#fff",
    fontSize: 10,
    position: "absolute",
    top: 92,
  },
  perfilContainer:{
    flexDirection:"row",
    padding:10,
    justifyContent: "center",
    alignItems: "center",
    justifyContent:"space-evenly"
  },
  menuText:{
    color: "#E8BC2B",
    width:120,
    fontFamily:"Asul-Bold",
    fontSize:20,
    borderBottomWidth:2,
    borderBottomColor:"#E8BC2B",
    opacity: 0.5,
    textAlign:"center",
  },
  menuTextHighlight: {
    opacity: 1,
    textShadowColor: '#E8BC2B',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },
  buttonText: {
    color: "#E8BC2B",
    fontSize: 34,
    textAlign: "center",
    marginTop: 23,
    marginBottom: 92,
    marginRight:50,
  },
  
  });
  
export default styles;