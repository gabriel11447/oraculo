import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#1F2229",
  },
  container: {
    flexDirection: "column",
  },
  bgImage: {
    flex: 1,
    zIndex: -1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
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
  },
  rankBanner: {
    position: "absolute",
    width: 270,
    top: 390,
  },
  summonerName: {
    color: "#E8BC2B",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginTop: 28,
    marginBottom: 92,
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
    top:200
  },
  perfil:{
    color: "#E8BC2B",
    fontWeight: "bold",
    fontSize:20,
  },
  partidas:{
    color: "#E8BC2B",
    fontWeight: "bold",
    marginLeft:70,
    fontSize:20,
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