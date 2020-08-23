module.exports = {
    "env": {
        "browser": true,
        "es2020": true,
        "node": true
    },
    "extends": "plugin:vue/essential",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
      "semi": ["error", "always"],
      "quotes": ["error", "single"]
  }
};
