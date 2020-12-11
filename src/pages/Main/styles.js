import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  pageContainer: {
    flex:1,
    backgroundColor: "#1F2229",
  },
  container: {
    flexDirection: "column",
  },
  backgroundView: {
    zIndex: -1,
    position: "absolute",
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
  bgImage: {
    zIndex: -1,
    opacity: 0.6,
    position: "absolute",
    resizeMode: "cover",
    height: '100%',
    width: '100%',
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
  iconContainer: {
    marginTop: 90,
  },
  summonerName: {
    color: "#CDBE91",
    fontFamily:"Asul-Bold",
    fontSize: 26,
    textAlign: "center",
    marginTop: 28,
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
    color: "#CDBE91",
    width: 120,
    fontFamily: "Asul-Bold",
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#CDBE91",
    opacity: 0.5,
    textAlign: "center",
  },
  menuTextHighlight: {
    opacity: 1,
    textShadowColor: "#CDBE91",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 20,
  },
  buttonImage: {
    color: "#CDBE91",
    position: "absolute",
    zIndex: 1,
    marginTop: 36,
    marginLeft: 20,
  },
  errorContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  },
  errorText: {
    color: "#CDBE91",
    fontFamily: "Asul-Bold",
    fontSize: 24,
    textAlign: "center",
    marginBottom: Dimensions.get("window").height / 2,
  },
  
  });
  
export default styles;