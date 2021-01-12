import { StyleSheet, Dimensions } from "react-native";

const large = Dimensions.get("screen").width * 0.94;

const styles = StyleSheet.create({
  match: {
    marginTop: 0,
  },
  cardImage: {
    flex: 1,
    backgroundColor: "#2A3540",
    flexDirection: "row",
    justifyContent: "space-between",
    width: large,
    height: 92,
  },
  cardWin: {
    padding: 2,
    backgroundColor: "#1BA9BD",
    width: large / 100,
  },
  cardLoss: {
    padding: 2,
    backgroundColor: "#EC2040",
    width: large / 100,
  },
  matchResult: {
    flexDirection: "row",
  },
  matchResultText: {
    alignSelf: "center",
    marginLeft: 20,
    fontFamily: "Asul-Bold",
    fontSize: 24,
    color: "#CDBE91",
  },
  matchInfo: {
    marginVertical: 10,
    marginRight: 15,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  matchInfoText: {
    fontFamily: "Asul-Bold",
    fontSize: 14,
    color: "#fff",
  },
});

export default styles;
