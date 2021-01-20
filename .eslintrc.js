module.exports = {
  env: {
    node: 1,
  },
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "react-native/no-inline-styles": 0,
    "prettier/prettier": 0,
    "no-lone-blocks": 0,
    "no-catch-shadow": 0,
    "no-shadow": 0,
    "react-hooks/exhaustive-deps": 0,
  },
  root: true,
  extends: "@react-native-community",
};
