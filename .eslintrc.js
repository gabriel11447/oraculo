module.exports = {
  env: {
    node: 1,
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "react-native/no-inline-styles": 0,
    "prettier/prettier": {
      error: {
        endOfLine: "auto",
      },
    },
  },
  root: true,
  extends: '@react-native-community',
};
