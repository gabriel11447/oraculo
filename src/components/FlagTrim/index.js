import React from "react";
import { Image, Dimensions } from "react-native";

export default function FlagTrim({ rank }) {
  let flagUrl = rank.find((type) => type.queueType == "RANKED_SOLO_5x5");

  {
    !flagUrl
      ? (flagUrl = "/datadragon/ranked-flags/UNRANKED")
      : (flagUrl = flagUrl.flag);
  }

  return (
    <Image
      style={{
        height: Dimensions.get("window").width > 360 ? 120 : 105,
        width: Dimensions.get("window").width > 360 ? 240 : 225,
        marginTop: Dimensions.get("window").width > 360 ? -130 : -110,
      }}
      source={{ uri: `https://api-lol-pecege.herokuapp.com${flagUrl}` }}
    />
  );
}
