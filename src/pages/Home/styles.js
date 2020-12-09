import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1F2229",    
  },
  inputContainer: {
    justifyContent: "center",
    marginTop: 85,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems:"center",
  },
  logo: {
    marginTop: Dimensions.get("screen").height/4,
    marginBottom: 25,
    alignSelf: "center",
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
  borderBottom: {
    borderBottomWidth:3,
    borderColor: "#CDBE91",
  },
  input: {
    marginTop:-80,
    fontFamily:"Asul-Regular",
    flex: 1,
    color: "white",
    fontSize: 20,
    marginRight: 10,
    paddingLeft: 15,
    color: "#CDBE91",
    backgroundColor: "#2A3540",
  },
  button: {
    marginTop:-80,
    backgroundColor: "#2A3540",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    color: "#CDBE91",
  },
  buttonText: {
    color: "#CDBE91",
    fontSize: 34,
    textAlign: "center",
  },
 searchIcon:{
   zIndex:1
 },
 copyRight:{
    alignSelf: "center",
    bottom: 10,
    textTransform: "uppercase",
    color: "#fff",
    position:"absolute",
    fontWeight:"bold"
  }
});
  
export default styles;