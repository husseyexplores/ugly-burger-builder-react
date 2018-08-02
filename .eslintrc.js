module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "prettier",
  ],
  "rules": {
    "react/prop-types": [1],
    "semi": [0, "always"],
    "linebreak-style": 0,
    "prettier/prettier": 1,
    "no-console": 1,
    "no-unused-vars": 1,
    "quotes": [1, "single"],
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx"]
    }],
    "no-param-reassign": 0
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jasmine": true
  }
}