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
    height:95,
    width:216.82,
    marginTop: 265,
    alignSelf: "center",
  },
  bgImage: {
    zIndex: -1,
    position: "absolute",
  },
  input: {
    marginTop:-80,
    fontFamily:"Asul-Regular",
    flex: 1,
    color: "white",
    fontSize: 20,
    marginRight: 20,
    paddingLeft: 35,
    color: "#CDBE91",
    backgroundColor: "#2A3540",
    borderLeftWidth:3,
    borderColor: "#CDBE91",
  },
  button: {
    marginTop:-80,
    marginRight: -10,
    backgroundColor: "#2A3540",
    width: 50,
    height: 50,
    color: "#CDBE91",
  },
  buttonText: {
    color: "#CDBE91",
    fontSize: 34,
    textAlign: "center",
  },
 searchIcon:{
  marginTop:-80,
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