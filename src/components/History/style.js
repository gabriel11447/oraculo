import { StyleSheet, Dimensions } from "react-native";

const large = Dimensions.get("screen").width * 0.95;

const styles = StyleSheet.create({
  listStyle: {
    marginBottom: "75%",
  },
  winRate: {
    color: "#CDBE91",
    fontFamily: "Asul-Bold",
    fontSize: 20,
    textAlign: "left",
    padding: 10,
    marginRight: 50,
  },

  loss: {
    backgroundColor: "#EC2040",
    height: 13,
    width: large,
    marginBottom: 10,
  },
});

export default styles;
