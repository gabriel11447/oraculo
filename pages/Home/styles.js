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
    marginTop: 40,
    alignSelf: "center",
  },
  bgImage: {
    flex: 1,
    zIndex: -1,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 20,
    marginRight: 20,
    paddingLeft: 35,
    color: "#CDBE91",
    backgroundColor: "#010101",
    borderWidth: 1,
    borderColor: "#785A28",
  },
  button: {
    marginRight: -10,
    backgroundColor: "#010101",
    width: 50,
    height: 50,
    color: "#CDBE91",
    borderWidth: 1,
    borderColor: "#785A28",
  },
  buttonText: {
    color: "#E8BC2B",
    fontSize: 34,
    textAlign: "center",
  },
 searchIcon:{
   marginRight:-33,
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