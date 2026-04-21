module.exports = {
  env: {
    node: true,
    es2021: true
  },
  extends: ["eslint:recommended", "plugin:node/recommended"],
  rules: {
    "node/no-unsupported-features/es-syntax": "off"
  }
}
