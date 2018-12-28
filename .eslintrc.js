module.exports = {
  extends: ["airbnb", "prettier", "prettier/react", "eslint:recommended"],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/prop-types": ["warn", { ignore: ["children"] }],
    "no-console": ["warn"]
  }
};
