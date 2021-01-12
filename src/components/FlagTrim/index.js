import React from "react";
import { Image } from "react-native";

export default function FlagTrim({ rank }) {
  let flagUrl = rank.find((type) => type.queueType == "RANKED_SOLO_5x5");

  {
    !flagUrl
      ? (flagUrl = "/datadragon/ranked-flags/UNRANKED")
      : (flagUrl = flagUrl.flag);
  }

  return (
    <Image
      style={{ height: 120, width: 240, marginTop: -130 }}
      source={{ uri: `https://api-lol-pecege.herokuapp.com${flagUrl}` }}
    />
  );
}
